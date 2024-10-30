import { FC } from "react";
import { TUser } from "../slices/userSlice";
import styled from "styled-components";

type Props = {
  user: TUser;
}

const Item: FC<Props> = ({ user }) => {
  return (
    <ItemCard>
      <h4>{user.name}</h4>
      <p className="item__text">{user.message}</p>
    </ItemCard>
  );
}

const ItemCard = styled.div`
height: 120px;
display: flex;
flex-direction: column;
gap: 10px;

.item__text{
height: 75px;
overflow-y: hidden;
}
`

export default Item;