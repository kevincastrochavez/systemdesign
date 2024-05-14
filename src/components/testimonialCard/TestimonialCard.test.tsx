import { render, screen } from '@testing-library/react';

import TestimonialCard from './TestimonialCard.tsx';
import {
  testimonialCardComplete,
  testimonialCardWithoutImage,
  testimonialCardWithoutUsername,
} from '../__mocks__/testimonialCardMocks.js';

describe('TestimonialCard', () => {
  it('renders without crashing', () => {
    render(<TestimonialCard {...testimonialCardComplete} />);

    const cardTitle = screen.getByText(testimonialCardComplete.title);
    const cardUsername = screen.getByText(testimonialCardComplete.username);
    const cardText = screen.getByText(testimonialCardComplete.text);

    expect(cardTitle).toBeInTheDocument();
    expect(cardUsername).toBeInTheDocument();
    expect(cardText).toBeInTheDocument();
  });

  it('renders everything but the image', () => {
    render(<TestimonialCard {...testimonialCardWithoutImage} />);

    const cardImageAlt = screen.findByAltText('Kevin Castro at the Sand Dunes');
    expect(cardImageAlt).not.toBe('Kevin Castro at the Sand Dunes');

    const cardTitle = screen.getByText(testimonialCardWithoutImage.title);
    const cardUsername = screen.getByText(testimonialCardWithoutImage.username);
    const cardText = screen.getByText(testimonialCardWithoutImage.text);

    expect(cardTitle).toBeInTheDocument();
    expect(cardUsername).toBeInTheDocument();
    expect(cardText).toBeInTheDocument();
  });

  it('hides username when not provided', () => {
    render(<TestimonialCard {...testimonialCardWithoutUsername} />);

    const cardUsername = screen.queryByText('@kevincastro');
    expect(cardUsername).not.toBeInTheDocument();
  });
});
