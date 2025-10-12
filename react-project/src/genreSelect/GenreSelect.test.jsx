import {screen, render, fireEvent} from "@testing-library/react";
import GenreSelect from "./GenreSelect.jsx";

describe('Tests Genre select app', () => {

    const genres = ['All', 'Action', 'Horror', 'Comedy', 'Drama'];

    test("check if component renders all genres passed in props", () => {
        render(<GenreSelect  genres={genres} selectedGenre="All" onSelect={() => {}}/>);
        const buttons = screen.getAllByRole("button");
        expect(buttons).toHaveLength(genres.length);
        genres.forEach(genre => {
            expect(screen.getByText(genre)).toBeInTheDocument();
        })
    })

    test("check if component highlights a selected genre passed in props", () => {
        render(<GenreSelect genres = {genres} selectedGenre="Action" onSelect={() => {}}/>);
        const actionButton = screen.getByText("Action");
        expect(actionButton).toHaveStyle({backgroundColor: "#007bff"});

        const comedyButton = screen.getByText("Comedy");
        expect(comedyButton).not.toHaveStyle({backgroundColor: "#007bff"});
    })

    test("check if after a click event on a genre button component calls \"onChange\" callback and passes correct genre in arguments", () => {
        const onSelect = jest.fn();
        render(<GenreSelect genres = {genres} selectedGenre="All" onSelect={onSelect} />)
        const allButton = screen.getByText("All")
        fireEvent.click(allButton)
        expect(onSelect).toHaveBeenCalledWith("All");
    })
})