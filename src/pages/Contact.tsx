import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUserAsync } from "../slices/userSlice";
import { AppDispatch } from "../store";
import { useNavigate } from 'react-router-dom'; 
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import styled from "styled-components";

type UserFormData = {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<UserFormData>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate(); 

  const onSubmit = (data: { name: string; email: string; message: string }) => {
    const newUser = {
      id: Date.now(),
      ...data,
    };
    dispatch(addUserAsync(newUser))
    reset()
    console.log(`Thank you for your interest, ${data.name}`)
    navigate('/generation');
  };

  return (
    <MainContent>
      <h1>Only CTA on the page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input__block">
          <TextField
            error={errors.name ? true : false}
            {...register("name", { required: true })}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fff",
                },
                "&:hover fieldset": {
                  borderColor: "#fff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: `${errors.name ? "red" : "#1976d2"}`,
                },
              },
            }}
            id="outlined-basic"
            label="Name"
            variant="outlined" />
          {errors.name && <span className="error">Это поле обязательно</span>}
        </div>
        <div className="input__block">
          <TextField
            error={errors.email ? true : false}
            {...register("email", { required: true })}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fff",
                },
                "&:hover fieldset": {
                  borderColor: "#fff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: `${errors.email ? "red" : "#1976d2"}`,
                },
              },
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined" />
          {errors.email && <span className="error">Это поле обязательно</span>}
        </div>
        <div className="input__block">
          <TextField
            error={errors.message ? true : false}
            {...register("message", { required: true })}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fff",
                },
                "&:hover fieldset": {
                  borderColor: "#fff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: `${errors.message ? "red" : "#1976d2"}`,
                },
              },
            }}
            id="outlined-basic"
            label="Message"
            variant="outlined" />
          {errors.message && <span className="error">Это поле обязательно</span>}
        </div>
        <Button type="submit">Добавить пользователя</Button>
      </form>
    </MainContent>
  );
}

const MainContent = styled.main` 
margin-top: 130px;
display: flex;
flex-direction: column;
justify-content: center;
height: calc(100vh - 117px - 104px);
align-items: center;
gap: 20px;

form{
display: flex;
flex-direction: column;
gap: 20px;
width: 600px;
padding: 30px;
border-radius: 20px;
background-color: rgba(25, 118, 210, 0.05);
}

label, input{
color: #fff;
}

.error{
position: absolute;
bottom: -20px;
left: 0;
color: red;
font-size: 12px;
}

.input__block{
position: relative;
margin-bottom: 20px;
}

@media(max-width: 700px){
form{
width: 100%;
}
}
`

export default Contact;