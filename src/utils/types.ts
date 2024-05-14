import { ReactNode } from 'react';

export interface TestimonialCardProps {
  /**
   * Image source and alt text
   */
  image?: {
    srcImg: string;
    alt: string;
  };
  /**
   * Title of the card
   */
  title: string;
  /**
   * Username of the card
   */
  username?: string;
  /**
   * Text of the card
   */
  text: string;
}

export interface MoreButtonProps {
  /**
   * Link to be redirected to
   */
  to: string;
  /**
   * Text to be displayed
   */
  text: string;
  /**
   * Icon to be displayed
   */
  icon?: ReactNode;
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
}
