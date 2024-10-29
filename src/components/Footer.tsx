import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      <div className="logo">
        <WorkOutlineIcon />
        <span>Some Company</span>
      </div>
      <span>2024</span>
    </Foot>
  );
}
const Foot = styled.footer`
position: fixed;
bottom: 0;
width: 100%;
display: flex;
justify-content: center;
gap: 10px;
align-items: center;
padding: 40px 24px;
background-color: #1b1b1b;
z-index: 5;

.logo{
display: flex;
align-items: center;
gap: 10px;
color: #fff;
text-decoration: none;
}
`

export default Footer;