import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory'

describe("Pruebas en el componente <AddCategory />", () => {
    const inputVal = "Saitama";
    
    test('Debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory= { () => {}} />)
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: inputVal}});
        expect(input.value).toBe(inputVal);
    });

    test("Se debe llamar onNewCategory si el input tiene un valor", () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory= { onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputVal}});
        fireEvent.submit(form);

        expect(input.value).toBe('');

        // expect(onNewCategory).toHaveBeenCalled();
        // expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputVal);
    });

    test("No se debe llamar onNewCategory si el input no tiene un valor", () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory= { onNewCategory } />);
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    });
});