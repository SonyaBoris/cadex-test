import { Button } from "@mui/material";
import VideoPlayer from "../components/Video";
import Item from "../components/Item";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchUsers, TUser } from "../slices/userSlice";
import { useEffect } from "react";
import { changeLimit } from "../slices/dataSlice";
import { Link } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import styled from "styled-components";

const Main = () => {

  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector<RootState, TUser[]>(
    (state) => state.users.data
  );
  const limit = useSelector<RootState, number>((state) => state.data.limit);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const VideoPlayer = lazy(() => import('../components/Video'));

  return (
    <MainContent>
      <section className="about">
        <div className="about__text">
          <h1>Most important title on the page</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore adipisci fugiat corrupti nam quis, quia, id omnis dignissimos dolor iure animi odit et unde quam velit rem neque laboriosam</p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <VideoPlayer />
        </Suspense>
      </section>
      <section className="items__section">
        <h2>Also very important title</h2>
        <div className="items">
          {users.filter((_, index) => index < limit).map(user =>
            <Item user={user} key={user.id} />
          )}
        </div>
        <Button variant="outlined" onClick={() => dispatch(changeLimit())} disabled={limit >= users.length}>Показать еще</Button>
      </section>
      <section className="less">
        <h3>Less important title</h3>
        <Link to='/contact'>
          <Button variant="outlined" >Contact us</Button>
        </Link>
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

@media(max-width: 500px){
.items{
grid-template-columns: repeat(1, 1fr);
}
}
`

export default Main;