import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectedValuesBox from './SelectedValuesBox';

describe('<SelectedValuesBox />', () => {
  test('it should mount', () => {
    render(<SelectedValuesBox />);
    
    const selectedValuesBox = screen.getByTestId('SelectedValuesBox');

    expect(selectedValuesBox).toBeInTheDocument();
  });
});