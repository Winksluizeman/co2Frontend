import { render, screen, fireEvent } from "@testing-library/react";
import AccountRegister from "../src/Pages/Account/AccountRegister";
import { BrowserRouter } from "react-router-dom";

const renderComponent = () =>
  render(
    <BrowserRouter>
      <AccountRegister />
    </BrowserRouter>
  );

test("toont foutmelding bij leeg formulier", () => {
  renderComponent();

  fireEvent.click(screen.getByText("Account aanmaken"));

  expect(screen.getByRole("alert")).toHaveTextContent("Vul een gebruikersnaam in");
});
