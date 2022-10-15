import {ChangeEvent, FormEvent, useState} from "react";

const LoginForm = () => {
    const defaultLoginDataState: {login: string, password: string} = {
        login: "",
        password: ""
    }

   const [loginData, setLoginData] = useState(defaultLoginDataState);

   const handleSubmit = (e: FormEvent) => {
       e.preventDefault();
       console.log(e);

       setLoginData(defaultLoginDataState)
   }

   const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
       console.log(e)
       setLoginData((loginData) => ({
           ...loginData,
           [e.target.name]: e.target.value,
       }));
   }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <h2>Login</h2>
            <br/>

            {/*TODO: Move input to separate component*/}

            <label htmlFor="login">Login</label>
            <input
                id="login"
                type="text"
                name="login"
                onChange={e => handleInput(e)}
                placeholder="Login"
                value={loginData.login}/>

            <label htmlFor="login">Password</label>
            <input
                id="password"
                type="password"
                name="password"
                onChange={e => handleInput(e)}
                placeholder="Login"
                value={loginData.password}/>

            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;