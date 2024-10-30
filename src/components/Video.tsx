import styled from "styled-components";

const VideoPlayer = () => {
  return (
    <div>
      <Frame
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></Frame>
    </div>
  );
};

const Frame = styled.iframe`
width: 560px; 
height: 315px;

@media (max-width: 990px) {
width: 100%; 
height: 300px;

}
`


export default VideoPlayer;
