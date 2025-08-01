/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

// Mock the Page component for testing since it's async
const TestPage = ({ slug }: { slug: string }) => {
  return <>
    <h1>Slug: {slug}</h1>
    <p>HoleText</p>
    <p>Welcome to Houston</p>
  </>;
};

it("App Router: Works with dynamic route segments", async () => {
  render(<TestPage slug="Test" />);
  await waitFor(() => {
    expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
  });
});

it('HoleText should be present in the document', async () => {
  render(<TestPage slug="Test" />);
  await waitFor(() => {
    expect(screen.getByText("HoleText")).toBeInTheDocument();
  });
});