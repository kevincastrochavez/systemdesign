import { ReactNode } from 'react';

export interface AvatarProps {
  /**
   * Image to be displayed
   */
  src?: string;
  /**
   * Image alt text
   */
  alt?: string;
  /**
   * Radius of the avatar
   */
  radius?: string;
  /**
   * Size of the avatar
   */
  size?: string;
}

export interface BlogCardProps {
  /**
   * Image to be displayed
   */
  image?: string;
  /**
   * Image alt text
   */
  imageAlt?: string;
  /**
   * Text to be displayed
   */
  title: string;
  /**
   * Description for the card
   */
  description: string;
  /**
   * Text for the Call to Action
   */
  ctaText: string;
  /**
   * Link to be redirected to for the Call to Action
   */
  ctaLink: string;
  /**
   * Icon for the Call to Action
   */
  ctaIcon: ReactNode;
  /**
   * Chips for the Call to Action
   */
  chips?: string[];
}

export interface ChipProps {
  /**
   * Text to be displayed
   */
  text: string;
  /**
   *
   */
  color?: string;
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
