import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SmartSelectOption from './SmartSelectOption';

describe('<SmartSelectOption />', () => {
  test('it should mount', () => {
    render(<SmartSelectOption />);
    
    const smartSelectOption = screen.getByTestId('SmartSelectOption');

    expect(smartSelectOption).toBeInTheDocument();
  });
});