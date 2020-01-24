import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from './App';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import { addStrikes, addBalls, addHit, addFoul } from './App';
/*
describe('addStrikes', () => {
  it('adds strikes', () => {
    // Arrange
    let expected = 2;
    let strike = 1;
    // Act
    let actual = addStrikes(strike);
    // Assert
    expect(actual).toBe(expected);
  });
});
*/
test('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
  expect(wrapper).toBeVisible;
});

test('renders without crashing', () => {
  const wrapper = rtl.render(<Display/>)
  expect(wrapper).toBeVisible;
});

test('renders without crashing', () => {
  const wrapper = rtl.render(<Dashboard/>)
  expect(wrapper).toBeVisible;
});

test("contains Strikes", () => {
  // Arrange
  const expectedStrikes = 1;
  const container = render(<Display />);
  const getByText = container.getByText;
  const getAllByText = container.getAllByText;

  // Act
  const strikesElements = getAllByText(/Strikes/i);
  getByText(/Strikes/i);

  // Assert
  expect(strikesElements.length).toBe(expectedStrikes);
});

test("contains Balls", () => {
  // Arrange
  const expectedBalls = 1;
  const container = render(<Display />);
  const getByText = container.getByText;
  const getAllByText = container.getAllByText;

  // Act
  const ballElements = getAllByText(/balls/i);
  getByText(/balls/i);

  // Assert
  expect(ballElements.length).toBe(expectedBalls);
});

/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/