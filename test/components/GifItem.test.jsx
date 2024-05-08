import { render, screen } from '@testing-library/react'; // Import render function
import { GifGridItem } from '../../src/components/GifGridItem';

describe("Propiedad de <GifItem />", () => {
    const gif = {
        title: "Un título",
        url: "https://localhost/algo.jpg"
    }

    test("Debe hacer match con el snapshoot", () => {
        const { container } = render(<GifGridItem title={gif.title} url={gif.url} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y alt de los props', () => {
        render(<GifGridItem title={gif.title} url={gif.url} />);
        // expect(screen.getByRole('img').src).toBe(gif.url);
        // expect(screen.getByRole('img').alt).toBe(gif.title);

        // Otra forma de hacerlo
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(gif.url);
        expect(alt).toBe(gif.title);
    });

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifGridItem title={gif.title} url={gif.url} />);
        expect(screen.getByText(gif.title)).toBeTruthy();
    })
});