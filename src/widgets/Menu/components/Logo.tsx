import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
  banner?: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 32px; // update with new banner
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href, banner }) => {
  const isAbsoluteUrl = href.startsWith("http");
  if(isDark){
    banner = 'https://gateway.pinata.cloud/ipfs/QmTS7vUBrLYVArZiraGc3zB2tShycKPweAATV4T7njbUkx';
  } else {
    banner = 'https://gateway.pinata.cloud/ipfs/QmTS7vUBrLYVArZiraGc3zB2tShycKPweAATV4T7njbUkx';
  }

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Knights DeFi home page">
          <img
            src="https://gateway.pinata.cloud/ipfs/QmTS7vUBrLYVArZiraGc3zB2tShycKPweAATV4T7njbUkx"
            alt="Apollo Logo"
            className="mobile-icon"
          />
          <img
            src={banner}
            alt="Apollo Logo"
            className="desktop-icon"
          />
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Knights DeFi home page">
          <img
            src="https://gateway.pinata.cloud/ipfs/QmTS7vUBrLYVArZiraGc3zB2tShycKPweAATV4T7njbUkx"
            alt="Apollo Logo"
            className="mobile-icon"
          />
          <img
            src={banner}
            alt="Knights DeFi Logo"
            className="desktop-icon"
          />
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
