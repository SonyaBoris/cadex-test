import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: #121212;
          color: #fff;
          *{
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          }
          h1{
          font-size: 40px;
          }
          h2{
          font-size: 30px;
          }
          h3{
          font-size: 24px;
          }
          h4{
          font-size: 16px;
          }
        }
      `,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
