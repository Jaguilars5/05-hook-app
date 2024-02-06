import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react-dom/test-utils";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Jefferson",
    email: "jegor.28.a@gmail.com",
  };
  test("Debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      fromState: initialForm,
      onInputChange: expect.any(Function),
      onReset: expect.any(Function),
    });
  });
  test("Debe de cambiar el nombre en el formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const newName = "Victoria";
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newName } });
    });
    expect(result.current.name).toBe(newName);
    expect(result.current.fromState.name).toBe(newName);
  });
  test("Debe de hacer reste en el  formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const newName = "Victoria";
    const { onInputChange, onReset } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newName } });
      onReset();
    });
    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.fromState.name).toBe(initialForm.name);
  });
});
