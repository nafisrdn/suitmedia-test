import { NavLinkStyled, LinkStyled } from "./NavLink.style";

const NavLink = ({ children, url, selected }) => {
  return (
    <NavLinkStyled>
      <LinkStyled to={url}>{children}</LinkStyled>
    </NavLinkStyled>
  );
};

export default NavLink;
