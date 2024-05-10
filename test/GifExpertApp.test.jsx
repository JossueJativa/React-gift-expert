import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../../src/GifExpertApp";

describe('Realizar el test de <GifExpertApp />', () => {
    test('Debe de mostrarse correctamente', () => {
        const wrapper = render(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorías', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        render(<GifExpertApp defaultCategories={categories} />);
        expect(screen.getByText(categories[0])).toBeInTheDocument();
        expect(screen.getByText(categories[1])).toBeInTheDocument();
    });

    test('Debe de mostrar un input para agregar una categoría', () => {
        render(<GifExpertApp />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('Debe de mostrar un botón para agregar una categoría', () => {
        render(<GifExpertApp />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('Debe de mostrar un mensaje de error si se intenta agregar una categoría vacía', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');
        input.value = '';
        button.click();
        expect(screen.getByText('El campo no puede estar vacío')).toBeInTheDocument();
    });

    test('Debe de agregar una categoría al hacer click en el botón', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');
        input.value = 'Naruto';
        button.click();
        expect(screen.getByText('Naruto')).toBeInTheDocument();
    });
});