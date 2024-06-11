import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NavBar from './NavBar'; // Adjust the import path according to your file structure
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBarProps } from '../../utils/types';

// Mock the window resize event
const mockWindowWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event('resize'));
};

describe('NavBar Component', () => {
  const defaultProps: NavBarProps = {
    logoInfo: { src: 'logo.png', alt: 'Test Logo' },
    links: [
      { to: '/', text: 'Home' },
      { to: '/about', text: 'About' },
    ],
    buttonsDesktop: [
      { text: 'Sign In', onclick: jest.fn() },
      { text: 'Sign Up', onclick: jest.fn() },
    ],
    buttonsMobile: [
      { text: 'Mobile Sign In', onclick: jest.fn() },
      { text: 'Mobile Sign Up', onclick: jest.fn() },
    ],
  };

  beforeEach(() => {
    mockWindowWidth(1024); // Set to desktop size by default
  });

  test('renders without crashing', () => {
    render(
      <Router>
        <NavBar {...defaultProps} />
      </Router>
    );
    expect(screen.getByAltText('Test Logo')).toBeInTheDocument();
  });

  test('displays desktop links and buttons on larger screens', () => {
    render(
      <Router>
        <NavBar {...defaultProps} />
      </Router>
    );

    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const signInButton = screen.getByText('Sign In');
    const signUpButton = screen.getByText('Sign Up');
    const menuButton = screen.queryByTestId('menu');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
    expect(menuButton).not.toBeInTheDocument();
  });

  test('displays mobile menu button on smaller screens', () => {
    mockWindowWidth(600); // Switch to mobile size
    render(
      <Router>
        <NavBar {...defaultProps} />
      </Router>
    );

    const menuButton = screen.queryByTestId('menu');
    expect(menuButton).toBeInTheDocument();
  });

  test('opens and closes mobile menu', () => {
    mockWindowWidth(600); // Switch to mobile size
    render(
      <Router>
        <NavBar {...defaultProps} />
      </Router>
    );

    const menuButton = screen.queryByTestId('menu');
    const mobileMenu = screen.queryByTestId('nav-mobile-menu');

    // Click to open menu
    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveAttribute('data-is-open', 'true');

    const closeButton = screen.queryByTestId('close-menu');

    // Click to close menu
    fireEvent.click(closeButton);
    expect(mobileMenu).toHaveAttribute('data-is-open', 'false');
  });

  test('calls correct function on button click', () => {
    render(
      <Router>
        <NavBar {...defaultProps} />
      </Router>
    );
    fireEvent.click(screen.getByText('Sign In'));
    expect(defaultProps.buttonsDesktop[0].onclick).toHaveBeenCalled();
    fireEvent.click(screen.getByText('Sign Up'));
    expect(defaultProps.buttonsDesktop[1].onclick).toHaveBeenCalled();
  });

  test('renders links correctly in mobile menu', () => {
    mockWindowWidth(600); // Switch to mobile size
    render(
      <Router>
        <NavBar {...defaultProps} />
      </Router>
    );

    // Open menu
    const menuButton = screen.queryByTestId('menu');
    fireEvent.click(menuButton);

    // Check links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  test('renders buttons correctly in mobile menu', () => {
    mockWindowWidth(600); // Switch to mobile size
    render(
      <Router>
        <NavBar {...defaultProps} />
      </Router>
    );

    // Open menu
    const menuButton = screen.queryByTestId('menu');
    fireEvent.click(menuButton);

    // Check buttons
    expect(screen.getByText('Mobile Sign In')).toBeInTheDocument();
    expect(screen.getByText('Mobile Sign Up')).toBeInTheDocument();
  });
});
