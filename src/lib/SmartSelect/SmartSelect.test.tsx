import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SmartSelect from './SmartSelect';

describe('<SmartSelect />', () => {
  test('it should mount', () => {
    render(<SmartSelect />);
    
    const smartSelect = screen.getByTestId('SmartSelect');

    expect(smartSelect).toBeInTheDocument();
  });
});