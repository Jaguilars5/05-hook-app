import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../../src/hooks/useFetch";

describe("Pruebas en useFetch", () => {
  beforeEach(() => {
    // Limpiar todos los mocks antes de cada test
    jest.clearAllMocks();
  });

  afterEach(() => {
    // Restaurar el mock de fetch
    jest.restoreAllMocks();
  });

  test("Debe retornar la información inicial", () => {
    // Mock de fetch para evitar llamada real
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      }),
    );

    const { result } = renderHook(() => useFetch("https://api.example.com"));
    const { data, isLoading, hasError } = result.current;

    expect(data).toBe(null);
    expect(isLoading).toBe(true);
    expect(hasError).toBe(null);
  });

  test("Debe retornar data y isLoading en false", async () => {
    const mockData = { id: 1, name: "Test" };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      }),
    );

    const { result } = renderHook(() =>
      useFetch("https://api.example.com/data"),
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.hasError).toBe(null);
  });

  test("Debe cambiar el estado cuando cambia la URL", async () => {
    const mockData1 = { id: 1, name: "First" };
    const mockData2 = { id: 2, name: "Second" };

    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        json: () => Promise.resolve(mockData1),
      })
      .mockResolvedValueOnce({
        json: () => Promise.resolve(mockData2),
      });

    const { result, rerender } = renderHook(({ url }) => useFetch(url), {
      initialProps: { url: "https://api.example.com/1" },
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual(mockData1);

    // Cambiar la URL
    rerender({ url: "https://api.example.com/2" });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual(mockData2);
  });
});
