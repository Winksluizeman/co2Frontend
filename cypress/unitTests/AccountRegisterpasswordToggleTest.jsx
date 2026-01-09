import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AccountRegister from "../src/Pages/Account/AccountRegister";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        text: () => Promise.resolve("OK"),
    })
);

const renderComponent = () =>
    render(
        <BrowserRouter>
            <AccountRegister />
        </BrowserRouter>
    );

test("toont success melding na succesvolle registratie", async () => {
    renderComponent();

    fireEvent.change(screen.getByLabelText("Gebruikersnaam"), { target: { value: "Wink" } });
    fireEvent.change(screen.getByLabelText("E-mail"), { target: { value: "wink@test.com" } });
    fireEvent.change(screen.getByLabelText("Wachtwoord"), { target: { value: "Password123" } });
    fireEvent.change(screen.getByLabelText("Leeftijd"), { target: { value: "21" } });

    fireEvent.click(screen.getByText("Account aanmaken"));

    await waitFor(() =>
        expect(screen.getByText("Account successfully created")).toBeInTheDocument()
    );
});
