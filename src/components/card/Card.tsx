import useContextMenu from "hooks/useContextMenu";
import Styled from "./Card.styled";
import { MouseEvent } from "react";
import ContextMenu from "components/contextMenu/ContextMenu";
import { useRecoilState } from "recoil";
import { videoInfoAtom } from "state/videoInfo/videoInfoAtom";

interface CardProps {
  img: string;
  title: string;
  channel: string;
  layout: "card" | "row";
  videoId: string;
}

const Card = (props: CardProps) => {
  const { img, title, channel, layout, videoId } = props;
  const { setPoints } = useContextMenu();

  const [_, setVideoInfo] = useRecoilState(videoInfoAtom);

  const handleContext = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setVideoInfo({
      img,
      title,
      channel,
      videoId,
    });
    setPoints({
      x: event.pageX,
      y: event.pageY,
    });
  };

  return (
    <>
      <Styled.Link
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="video-link"
        onContextMenu={handleContext}
      >
        <Styled.CardWrapper layout={layout}>
          <Styled.Img
            src={img}
            alt=""
            width="245px"
            height="137px"
          ></Styled.Img>
          <div className="text">
            <Styled.Title>{title}</Styled.Title>
            <Styled.Channel>{channel}</Styled.Channel>
          </div>
        </Styled.CardWrapper>
      </Styled.Link>

      <ContextMenu />
    </>
  );
};

export default Card;
