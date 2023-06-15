import styled from "styled-components";

const CardWrapper = styled("div")`
  width: 245px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled("h2")`
  font-size: 14px;
  padding: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
`;
const Channel = styled("p")`
  font-size: 14px;
  padding: 0;
  margin: 0;
`;
const CardStyled = { CardWrapper, Title, Channel };

export default CardStyled;
