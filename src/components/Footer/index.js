import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaReact,
} from "react-icons/fa";

import {
  StyledDevelopedBy,
  StyledFooter,
  StyledIconItem,
  StyledIconList,
  StyledRightsReserved,
} from "./Footer";

function Footer() {
  return (
    <StyledFooter>
      <StyledIconList>
        <StyledIconItem>
          <a href="https://edtech1985.com.br" target="_blank" rel="noreferrer">
            <FaReact />
          </a>
        </StyledIconItem>
        <StyledIconItem>
          <a
            href="https://github.com/edtech1985"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </StyledIconItem>
        <StyledIconItem>
          <a
            href="https://www.instagram.com/edtech1985/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </StyledIconItem>
        <StyledIconItem>
          <a
            href="https://www.linkedin.com/in/edtech1985/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </StyledIconItem>
        <StyledIconItem>
          <a
            href="https://wa.me/5551992002595"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </StyledIconItem>
      </StyledIconList>
      <StyledRightsReserved>© 2023 Direitos Reservados</StyledRightsReserved>
      <StyledDevelopedBy>
        Desenvolvido por{" "}
        <a
          href="http://edtech1985.com.br"
          alt="edtech1985 Portfolio"
          target="_blank"
          rel="noreferrer"
        >
          edtech1985
        </a>
      </StyledDevelopedBy>
    </StyledFooter>
  );
}

export default Footer;
