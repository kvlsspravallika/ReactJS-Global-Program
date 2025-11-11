import {fireEvent, render, screen} from "@testing-library/react";
import SearchForm from "./SearchForm.jsx";

describe('SearchForm App', () => {
    test('test the landing page', () => {
        render(<SearchForm />);
        const inputElement = screen.getByPlaceholderText("What do you want to watch?");
        expect(inputElement).toBeInTheDocument();
        const searchButton = screen.getByText("SEARCH");
        expect(searchButton).toBeInTheDocument();
    })

    test('Test that component renders an input with the value equal to initial value passed in props', () => {
        // creating dummy onSearch
        const onSearch = jest.fn();
        render(<SearchForm initialQuery = {"Learn React JS"} onSearch={onSearch} />);
        const inputElement = screen.getByPlaceholderText("What do you want to watch?");
        expect(inputElement).toHaveValue("Learn React JS");
    })

    test('Test that after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {
        const onSearch = jest.fn(); // pass mock function for the onSearch prop
        render(<SearchForm initialQuery="" onSearch={onSearch} />);
        const inputElement = screen.getByPlaceholderText("What do you want to watch?")
        fireEvent.change(inputElement, { target: { value: "Learn React JS Basics" } });
        const searchButton = screen.getByText("SEARCH");
        fireEvent.click(searchButton);
        expect(inputElement).toHaveValue("Learn React JS Basics");
        // assert onSearch callback was called with the right value
        expect(onSearch).toHaveBeenCalledWith("Learn React JS Basics");
    })

    test('Test that after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
        const onSearch = jest.fn();
        render(<SearchForm initialQuery="" onSearch={onSearch} />);
        const inputElement = screen.getByPlaceholderText("What do you want to watch?");
        fireEvent.change(inputElement, {target : {value : "Learn JAVA"}})
        fireEvent.keyDown(inputElement, {key: "Enter"})
        expect(inputElement).toHaveValue("Learn JAVA");
        expect(onSearch).toHaveBeenCalledWith("Learn JAVA");
    })
})