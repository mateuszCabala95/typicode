import {useState} from "react";

const LoginForm = () => {

   const [loginData, setLoginData] = useState({
       login: "",
       password: ""
   });

   const handleSubmit = (e: any) => {
       console.log(e);
   }
    return (
        <form onSubmit={handleSubmit}>

            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;