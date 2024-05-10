import { getGifs } from '../../src/helpers/getGifs';

describe("Pruebas con respecto a getGifs de JavaScript", () => {
    test("Debe de retornar unarreglo de gifs", async() => {
        const gifs = await getGifs("One Punch");
        expect(gifs.length).toBe(5);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    });
});