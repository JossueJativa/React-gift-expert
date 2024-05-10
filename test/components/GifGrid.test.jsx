import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en el componente de <GifGrid />', () => {
    const category = "One Punch";
    test('Debe mostrar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: false
        });

        const gifs = [
            {
                id: "ABC",
                title: "Cualquier cosa",
                url: "https://localhost/cualquier/cosa.jpg"
            },
            {
                id: "123",
                title: "Cualquier cosa",
                url: "https://localhost/cualquier/cosa.jpg"
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
        expect(screen.getByText(category));
        expect(screen.queryByText('Cargando...')).toBeNull();
    });
})