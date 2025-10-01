/* eslint-env jest */
import {fireEvent, render, screen} from "@testing-library/react";
import Counter from "./Counter.jsx";

describe("Counter", () => {
    test('check if increment is in the document', () => {
        render(<Counter />);
        expect(screen.getByText("Increment")).toBeInTheDocument();
    });

    test('check if component renders initial value provided in props', () => {
        render(<Counter initialValue = {10} />);
        const counter = screen.getByTestId("counter-value");
        expect(counter).toHaveTextContent("10");
    })

    test('click event on "increment" button increment the displayed value', () => {
        render(<Counter initialValue = {10} />);
        const incrementButton = screen.getByText("Increment");
        fireEvent.click(incrementButton);
        const counter = screen.getByTestId("counter-value");
        expect(counter).toHaveTextContent("11");
    })

    test('click event on "decrement" button decrements the displayed value', () => {
        render(<Counter initialValue = {5} />);
        const incrementButton = screen.getByText("Decrement");
        fireEvent.click(incrementButton);
        const counter = screen.getByTestId("counter-value");
        expect(counter).toHaveTextContent("4");
    })

    test('check click event multiple times', () => {
        render(<Counter initialValue = {10} />);
        const incrementButton = screen.getByText("Increment");
        const decrementButton = screen.getByText("Decrement");
        fireEvent.click(incrementButton);
        fireEvent.click(decrementButton);
        fireEvent.click(incrementButton);
        const counter = screen.getByTestId("counter-value");
        expect(counter).toHaveTextContent(11);
    })
})

