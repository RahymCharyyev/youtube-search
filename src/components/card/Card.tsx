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
      <Styled.Img src={img} alt="" width="245px" height="137px"></Styled.Img>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Channel>{channel}</Styled.Channel>
    </Styled.CardWrapper>
  );
};

export default Card;
