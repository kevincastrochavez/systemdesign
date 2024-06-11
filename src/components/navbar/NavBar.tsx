/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';

import navBarLogo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { NavBarProps } from '../../utils/types';

const navBarContainerCss = css`
  font-family: 'Noto Sans', sans-serif;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const navBarInnerContainerCss = css`
  max-width: 1256px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
  margin: 0 auto;

  @media (min-width: 900px) {
    justify-content: unset;
    gap: 60px;
  }

  @media (min-width: 1040px) {
    gap: 90px;
  }

  & > svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const navBarDesktopCss = css`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const navBarDesktopLinksCss = css`
  display: flex;
  gap: 32px;
`;

const navBarDesktopButtonsCss = css`
  display: flex;
  gap: 16px;
`;

const navBarMobileCss = css`
  transition: right 0.4s ease-in-out;
  position: absolute;
  top: 0;
  right: -100%;
  width: 100vw;
  height: 100vh;
  background: white;
  z-index: 999;
  padding: 18px 16px 16px 16px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 24px;

  &[data-is-open='true'] {
    transition: right 0.4s ease-in-out;
    right: 0;
  }
`;

const navBarMobileTopCss = css`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  height: fit-content;
`;

const navBarMobileLinksCss = css`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > a {
    text-decoration: none;
    font-size: 14px;
    line-height: 20px;
    padding: 8px 12px;
  }
`;

const navBarMobileButtonsCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
  }
`;

/**
 * NavBar component
 * @param {{src: string; alt: string}} logoInfo - logo information
 * @param {[Object]} links - links to be displayed in the navbar
 * @param {[Object]} buttonsDesktop - desktop buttons
 * @param {[Object]} buttonsMobile - mobile buttons
 * @returns {JSX.Element}
 */
/** Primary UI component for the NavBar component */
function NavBar({
  logoInfo,
  links,
  buttonsDesktop,
  buttonsMobile,
}: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const desktopInitialSize = 900;
  const { current: windowWidth } = useRef(window.innerWidth);

  return (
    <nav css={navBarContainerCss}>
      <div css={navBarInnerContainerCss}>
        <img {...logoInfo} />

        {windowWidth >= desktopInitialSize && (
          <div css={navBarDesktopCss}>
            <div css={navBarDesktopLinksCss}>
              {links.map((link, index) => (
                <Link key={index} to={link.to}>
                  {link.text}
                </Link>
              ))}
            </div>

            <div css={navBarDesktopButtonsCss}>
              {buttonsDesktop.map((button, index) => (
                <Button key={index} {...button} />
              ))}
            </div>
          </div>
        )}

        {windowWidth < desktopInitialSize && (
          <IconMenu2 onClick={() => setMenuOpen(true)} data-testid='menu' />
        )}

        {windowWidth < desktopInitialSize && (
          <div
            css={navBarMobileCss}
            data-is-open={menuOpen}
            data-testid='nav-mobile-menu'
          >
            <div css={navBarMobileTopCss}>
              <img
                src={navBarLogo}
                alt='Abstractly logo, featuring the letter A as the main letter'
              />

              <IconX
                onClick={() => setMenuOpen(false)}
                data-testid='close-menu'
              />
            </div>

            <div css={navBarMobileLinksCss}>
              {links.map((link, index) => (
                <Link key={index} to={link.to}>
                  {link.text}
                </Link>
              ))}
            </div>

            <div css={navBarMobileButtonsCss}>
              {buttonsMobile.map((button, index) => (
                <Button key={index} {...button} />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
