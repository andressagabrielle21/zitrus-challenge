import { render, fireEvent, screen } from "@testing-library/react";
import Home from "./Home";

// The Render method renders a component to test
// The FireEvent tests events of a certain component, for example a button fireing a event after being clicked

//Testing Unit Testing Example
test('Renders login test example', () => {
    expect("Something").toBe("Something");
    expect("else").toBe("else");
});

// This test is not working. There must be something wrong with the dependencies
test("check if button is being rendered", () => {
    render(<Home />);
    const btn = screen.getByTitle("buttonTest");
    expect(btn).toBeTruthy();
});