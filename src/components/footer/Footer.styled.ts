import styled from "styled-components";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-top: 1px solid #f1f1f1;
  padding-top: 20px;
  margin-top: 290px;
  @media screen and (max-width: 560px) {
    margin-top: 120px;
  }
`;

const Text = styled("p")`
  font-size: 18px;
  font-weight: bold;
  font-family: "Rubik";
  @media screen and (max-width: 560px) {
    font-size: 14px;
  }
`;

const Link = styled("a")`
  font-size: 18px;
  font-weight: bold;
  font-family: "Rubik";
  text-decoration: none;
  color: grey;
  &:hover {
    color: ${(props) => props.theme.textColor};
  }
  @media screen and (max-width: 560px) {
    font-size: 14px;
  }
`;

const FooterStyled = {
  Wrapper,
  Text,
  Link,
};

export default FooterStyled;
