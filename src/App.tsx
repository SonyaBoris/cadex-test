import { Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"

import styled from "styled-components";
import Generated from "./pages/Generated"

function App() {

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/generation" element={<Generated />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
max-width: 1200px;
padding: 0 24px;
margin: 20px auto;
`

export default App
