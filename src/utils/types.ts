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
