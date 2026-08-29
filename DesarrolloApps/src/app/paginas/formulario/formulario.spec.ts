import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Formulario } from './formulario';

describe('Formulario', () => {
  let fixture: ComponentFixture<Formulario>;
  let elemento: HTMLElement;

  const escribir = async (indice: number, valor: string) => {
    const entradas = elemento.querySelectorAll<HTMLInputElement>('input[type="number"]');
    entradas[indice].value = valor;
    entradas[indice].dispatchEvent(new Event('input'));
    await fixture.whenStable();
  };

  const elegir = async (operacion: string) => {
    const select = elemento.querySelector<HTMLSelectElement>('select')!;
    select.value = operacion;
    select.dispatchEvent(new Event('change'));
    await fixture.whenStable();
  };

  const calcular = async () => {
    elemento.querySelector<HTMLButtonElement>('button.primario')!.click();
    await fixture.whenStable();
  };

  const resultado = () =>
    elemento.querySelector<HTMLInputElement>('input[readonly]')!.value;

  const operar = async (a: string, b: string, operacion: string) => {
    await escribir(0, a);
    await escribir(1, b);
    await elegir(operacion);
    await calcular();
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulario],
    }).compileComponents();

    fixture = TestBed.createComponent(Formulario);
    elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('suma dos números', async () => {
    await operar('4', '6', 'sumar');
    expect(resultado()).toBe('10');
  });

  it('resta dos números', async () => {
    await operar('10', '3.5', 'restar');
    expect(resultado()).toBe('6.5');
  });

  it('multiplica dos números', async () => {
    await operar('-3', '7', 'multiplicar');
    expect(resultado()).toBe('-21');
  });

  it('divide dos números', async () => {
    await operar('9', '2', 'dividir');
    expect(resultado()).toBe('4.5');
  });

  it('avisa al dividir entre cero y no guarda historial', async () => {
    await operar('5', '0', 'dividir');
    expect(resultado()).toBe('');
    expect(elemento.querySelector('.error')?.textContent).toContain('cero');
    expect(elemento.querySelectorAll('.historial li').length).toBe(0);
  });

  it('avisa si falta algún número', async () => {
    await operar('5', '', 'sumar');
    expect(elemento.querySelector('.error')?.textContent).toContain('válidos');
  });

  it('conserva solo las últimas 5 operaciones, la más reciente primero', async () => {
    for (const n of ['1', '2', '3', '4', '5', '6']) {
      await operar(n, '1', 'sumar');
    }

    const filas = elemento.querySelectorAll('.historial li');
    expect(filas.length).toBe(5);
    expect(filas[0].textContent).toContain('6 + 1');
    expect(filas[0].textContent).toContain('7');
    expect(filas[4].textContent).toContain('2 + 1');
  });

  it('limpia los campos y el resultado', async () => {
    await operar('8', '2', 'multiplicar');
    expect(resultado()).toBe('16');

    elemento.querySelector<HTMLButtonElement>('button.secundario')!.click();
    await fixture.whenStable();

    const entradas = elemento.querySelectorAll<HTMLInputElement>('input[type="number"]');
    expect(entradas[0].value).toBe('');
    expect(entradas[1].value).toBe('');
    expect(resultado()).toBe('');
    expect(elemento.querySelectorAll('.historial li').length).toBe(1);
  });
});
