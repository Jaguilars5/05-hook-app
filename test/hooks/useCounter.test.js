import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

describe("Pruebas en useCounter", () => {
  test("Debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, Aumentar, Decrementar, Reset } = result.current;
    expect(counter).toEqual(expect.any(Number));
    expect(Aumentar).toEqual(expect.any(Function));
    expect(Decrementar).toEqual(expect.any(Function));
    expect(Reset).toEqual(expect.any(Function));
  });
  test("El conter debe de generar e valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
  test("Debe de incrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, Aumentar } = result.current;
    act(() => {
      Aumentar();
    });
    expect(result.current.counter).toBe(101)
  });
  test("Debe de decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const {Decrementar } = result.current;
    act(() => {
      Decrementar();
    });
    expect(result.current.counter).toBe(99)
  });
  test("Debe de resetear el contador", () => {
    const { result } = renderHook(() => useCounter());
    const {counter,Reset,Decrementar} = result.current;
    act(() => {
      Decrementar();
      Reset();
    });
    expect(result.current.counter).toBe(counter)
  });
});
