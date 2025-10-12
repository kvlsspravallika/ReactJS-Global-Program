import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renders input and button", () => {
    render(<SearchBar onSearch={() => {}} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("updates input value when typing", () => {
    render(<SearchBar onSearch={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Matrix" } });
    expect(input.value).toBe("Matrix");
  });

  it("calls onSearch with input value when SEARCH button is clicked", () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Inception" } });
    fireEvent.click(screen.getByRole("button", { name: /search/i }));
    expect(onSearch).toHaveBeenCalledWith("Inception");
  });

  it("calls onSearch with input value when Enter is pressed", () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Avatar" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(onSearch).toHaveBeenCalledWith("Avatar");
  });

  it("sets initial query if provided", () => {
    render(<SearchBar initialQuery="Titanic" onSearch={() => {}} />);
    expect(screen.getByRole("textbox").value).toBe("Titanic");
  });
});

