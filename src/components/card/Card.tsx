import logo from "assets/logo.svg";
import Styled from "./Card.styled";

interface CardProps {
  img: string;
  title: string;
  channel: string;
}

const Card = (props: CardProps) => {
  const { img, title, channel } = props;
  return (
    <Styled.CardWrapper>
      <img src={img} alt="" width="245px" height="137px" />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Channel>{channel}</Styled.Channel>
    </Styled.CardWrapper>
  );
};

export default Card;
