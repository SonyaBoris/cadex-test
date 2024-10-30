import { motion } from "framer-motion"
import styled from "styled-components";

const Generated = () => {
  return (
    <Message>
      <motion.h1
       initial={{ opacity: 0, y: 100 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, delay: 0.5 }}>Message generated on the server</motion.h1>
    </Message>
  );
}

const Message = styled.div`
margin-top: 130px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
height: calc(100vh - 117px - 104px);
`
export default Generated;