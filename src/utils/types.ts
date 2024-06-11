import { ReactNode } from 'react';

export interface ActionIconProps {
  /**
   * Icon to be displayed
   */
  icon: ReactNode;
  /**
   * Color of the icon
   */
  color?: string;
  /**
   * Size of the icon
   */
  size?: string;
  /**
   * Variant of the icon
   */
  variant?: string;
  /**
   * Disabled state of the icon
   */
  disabled?: boolean;
  /**
   * Radius of the icon
   */
  radius?: string;
  /**
   * Click event handler
   */
  onClick?: () => void;
}

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
   * More Button for the Call to Action
   * */
  moreButton: MoreButtonProps;
  /**
   * Chips for the Call to Action
   */
  chips?: ChipProps[];
}

export interface ButtonProps {
  /**
   * OnClick handler
   */
  onclick?: () => void;
  /**
   * Text to be displayed
   */
  text: string;
  /**
   * Variant of the button
   */
  variant?: string;
  /**
   * Color of the button
   */
  color?: string;
  /**
   * Size of the button
   */
  size?: string;
  /**
   * Radius of the button
   */
  radius?: string;
  /**
   * Width of the button
   */
  width?: string;
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * Icon position
   */
  iconPosition?: string;
  /**
   * Icon to be displayed
   */
  icon?: ReactNode;
}

export interface CartControlProps {
  /**
   * Radius of the control
   */
  radius?: string;
  /**
   * Min value of the control
   */
  minValue?: number;
  /**
   * Max value of the control
   */
  maxValue?: number;
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

export interface InputProps {
  /**
   * Text to be displayed in the label
   */
  labelText: string;
  /**
   * Left icon to be displayed, if any
   */
  leftIcon?: ReactNode;
  /**
   * Placeholder of the input
   */
  placeholder?: string;
  /**
   * Type of the input
   */
  type?: string;
  /**
   * Pattern of the input
   */
  pattern?: string;
  /**
   * Hint of the input
   */
  hint?: string;
  /**
   * Error message of the input
   */
  errorMessage?: string;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
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
  /**
   * Color of the button
   */
  color?: string;
}

export interface ProfileCardProps {
  /**
   * Image source and alt text
   */
  image: AvatarProps;
  /**
   * Title of the card
   */
  title: string;
  /**
   * Subtitle of the card
   */
  subtitle: string;
  /**
   * Text of the card
   */
  text?: string;
  /**
   * Button text of the card
   */
  button: ButtonProps;
  /**
   * Action icons to be displayed
   */
  socialBar?: SocialBarProps;
}

export interface RatingProps {
  /**
   * Rating value
   * */
  rating: number;
  /**
   * Size of the stars
   * */
  size?: string;
}

export interface SocialBarProps {
  /**
   * Action icons to be displayed
   */
  actionIcons?: ActionIconProps[];
  /**
   * Color of the social bar
   */
  color?: string;
  /**
   * Size of the social bar
   */
  size?: string;
  /**
   * Width of the social bar
   */
  width?: string;
  /**
   * Separation among the icons
   */
  separation?: string;
}

export interface TestimonialCardProps {
  /**
   * Image source and alt text
   */
  image?: AvatarProps;
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

export interface NavBarProps {
  /**
   * Logo source and alt text
   */
  logoInfo: {
    src: string;
    alt: string;
  };
  /**
   * Links to be displayed
   */
  links: { text: string; to: string }[];
  /**
   * Buttons to be displayed on desktop
   */
  buttonsDesktop: ButtonProps[];
  /**
   * Buttons to be displayed on mobile
   */
  buttonsMobile: ButtonProps[];
}
