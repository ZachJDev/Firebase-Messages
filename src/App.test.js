import { render, screen } from "@testing-library/react";
import App from "./App";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";

beforeAll(async () => {
  await enableNetwork(getFirestore());
});

afterAll(async () => {
  await disableNetwork(getFirestore());
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Repo/i);
  expect(linkElement).toBeInTheDocument();
});
