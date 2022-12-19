import{
    RedButton,
    BlueButton,
    SmallButton,
    LongLabelButton
} from "../stories/Button.stories";

import {render, screen} from "@testing-library/react";

const mainColor = "brown";

test("should render RedButton", ()=>{
    render(<RedButton {...RedButton.args}/>);
    expect(screen.getByRole("button")).toHaveTextContent(/Red Button/i)
    expect(screen.getByRole("button")).toHaveStyle("backgroundColor: red")
});

test("should render BlueButton", ()=>{
    render(<BlueButton {...BlueButton.args}/>);
    expect(screen.getByRole("button")).toHaveTextContent(/Blue Button/i)
    expect(screen.getByRole("button")).toHaveStyle("backgroundColor: blue")
});

test("should render SmallButton", ()=>{
    render(<SmallButton {...SmallButton.args}/>);
    expect(screen.getByRole("button")).toHaveTextContent(/Small Button/i)
    expect(screen.getByRole("button")).toHaveStyle("color:black")
});

test("should render LongLabelButton", ()=>{
    render(<LongLabelButton {...LongLabelButton.args}/>);
    expect(screen.getByRole("button")).toHaveTextContent(/contents/i)
    expect(screen.getByRole("button")).toHaveStyle("color:red")
});