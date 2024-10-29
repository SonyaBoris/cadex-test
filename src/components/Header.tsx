import { Button } from "@mui/material";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DialpadIcon from '@mui/icons-material/Dialpad';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Head>
      <div className="header__container">
        <Link to='/' className="logo">
          <WorkOutlineIcon />
          <span>Some Company</span>
        </Link>
        <Link to='/contact'>
          <Button variant="outlined" endIcon={<DialpadIcon />}>Contact us</Button>
        </Link>
      </div>
    </Head>
  );
}

const Head = styled.header`
position: fixed;
top: 0;
width: 100%;
padding: 40px 24px;
background-color: #1b1b1b;
z-index: 5;

.header__container{
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1200px;
margin: 0 auto;
}

.logo{
display: flex;
align-items: center;
gap: 10px;
color: #fff;
text-decoration: none;
}
`

export default Header;