import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe de regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs("One Punch"));
        const { images, isLoading } = result.current;
        expect(images).toEqual([]);
        expect(isLoading).toBe(true);
    });

    test('Debe de regresar un arreglo de imágenes y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("One Punch"));
        await waitFor(
            () => {
                expect(result.current.images.length).toBeGreaterThan(0);
                expect(result.current.isLoading).toBe(false);
            }
        );

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBe(false);
    });
})