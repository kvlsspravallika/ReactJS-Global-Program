import React from "react";

class Counter extends React.Component {
    // constructor to initialize state and bind methods
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.initialValue
        };

        this.whenIcrementButtonIsClicked = this.increment.bind(this);
        this.whenDecrementButtonIsClicked = this.decrement.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }

    decrement() {
        this.setState({count: this.state.count - 1});
    }

    render() {
        return React.createElement(
            "div", // parent element
            { style: { textAlign: "center", marginTop: "20px" } }, // props for <div>
            // Child 1: display the current count
            React.createElement("h1", { "data-testid": "counter-value", "id" : "counter-value" }, this.state.count),
            // Child 2: decrement button
            React.createElement(
                "button",
                { onClick: this.whenDecrementButtonIsClicked, style: { marginRight: "10px" }, "id" : "decrement-btn"},
                "Decrement"
            ),
            // Child 3: increment button
            React.createElement(
                "button",
                { onClick: this.whenIcrementButtonIsClicked, "id" : "increment-btn" },
                "Increment"
            )
        );
    }
}

export default Counter;