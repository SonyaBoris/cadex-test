import { Button } from "@mui/material";
import styled from "styled-components";
import VideoPlayer from "../components/Video";
import Item from "../components/Item";

const Main = () => {
  return (
    <MainContent>
      <section className="about">
        <div className="about__text">
          <h1>Most important title on the page</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore adipisci fugiat corrupti nam quis, quia, id omnis dignissimos dolor iure animi odit et unde quam velit rem neque laboriosam</p>
        </div>
        <VideoPlayer />
      </section>
      <section className="items__section">
        <h2>Also very important title</h2>
        <div className="items">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <Button variant="outlined" >Contact us</Button>
      </section>
      <section className="less">
        <h3>Less important title</h3>
        <Button variant="outlined" >Contact us</Button>
      </section>
    </MainContent>
  );
}

const MainContent = styled.main` 
margin: 137px 0 124px; 

section{
margin-bottom: 30px;
}

.about{
display: flex;
padding: 30px 24px;
justify-content: space-between;
gap: 20px;
background-color: rgba(25, 118, 210, 0.05);
border-radius: 20px;
}

.about__text{
max-width: 400px;
display: flex;
flex-direction: column;
gap: 20px;
}

.items__section{
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
}

.items{
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
}

.less{
display: flex;
justify-content: center;
flex-direction: column;
gap: 20px;
align-items: center;
padding: 24px;
background-color: rgba(25, 118, 210, 0.05);
border-radius: 20px;
}

@media(max-width: 990px){
.about{
flex-direction: column;
}
.items{
grid-template-columns: repeat(2, 1fr);
}
}
`

export default Main;