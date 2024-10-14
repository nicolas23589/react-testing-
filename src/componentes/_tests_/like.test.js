import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Like from '../like';

describe('like component', () => {
  test('Que por defecto, el componente muestra en el párrafo el valor "Likes: 0".', () => {
    render(<Like />);
    const likesElement = screen.getByText(/Likes: 0/i);
    expect(likesElement).toBeInTheDocument();
  });

  test('prueba para verificar que se incrementan los likes', () => {
    render(<Like />);
    const buttonIncrement = screen.getByTestId('increment'); //se usó el atributo testId para identificar mejor este elemento y no generar confusiones en el test de react con el otro elemento de tipo botón (el de dislikes)
    fireEvent.click(buttonIncrement);
    const likesElement = screen.getByText(/Likes: 1/i);
    expect(likesElement).toBeInTheDocument();
  });

  test('verificar decremento', () => {
    render(<Like />);
    const buttonDecrement = screen.getByTestId('decrement');
    fireEvent.click(buttonDecrement);
    const likesElement = screen.getByText(/Likes: -1/i);
    expect(likesElement).toBeInTheDocument();
  });
});
