import React, {useState} from 'react'

const Login = ({handleLogin}) => {

    // console.log(handleLogin)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);

        setEmail("");
        setPassword("");
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className="border-2 rounded-xl border-emerald-600 p-20">
            <form 
            onSubmit={(e)=>{
                submitHandler(e);
            }}
            
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type='email' placeholder='Enter your email'></input>

                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400' type='password' placeholder='Enter your password'></input>
                <button className='mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-white'>Log In</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
