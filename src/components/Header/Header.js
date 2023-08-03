import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: black;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100vw;
  max-height: 100px;
  /* padding-left: 20px;
  padding-right: 20px; */
  box-sizing: border-box;
  font-size: 900;
  color: black;
`;

export const StyledLogo = styled.img`
  width: 4rem;
  max-height: 4rem;
`;

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavItem = styled.a`
  display: block;
  padding: 0.75rem;
  color: #fff;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background-color: #555;
    border-radius: 10px;
  }
`;

export const StyledDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 10px;
  &:hover {
    display: block;
  }
`;

export const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${StyledDropdownContent} {
    display: block;
    background-color: black;
  }
`;

export const StyledCartDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledAvatar = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;

  @media only screen and (max-width: 400px) {
    display: none;
  }
`;

export const StyledAvatarImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export const StyledCart = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const StyledCartIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;

  @media only screen and (max-width: 400px) {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.5rem;
    font-size: 1rem;
  }
`;

export const StyledCartCount = styled.div`
  margin-left: 0.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: black;
  font-size: 1.25rem;

  @media only screen and (max-width: 400px) {
    margin-left: 0.25rem;
    font-size: 0.5rem;
    font-size: 1rem;
  }
`;
