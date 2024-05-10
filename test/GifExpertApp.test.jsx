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
});