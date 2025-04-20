import { useState } from "react"
import { Button, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import axios from "axios"
interface LoginFormProps {
   url: string,
   isRegister?: boolean,
}

export default function LoginForm({url, isRegister}: LoginFormProps) {
   const [email, setEmail] = useState<string>("")
   const [password, setPassword] = useState<string>("")
   const [name, setName] = useState<string>("")
   if (name){
      setName(name)
   }
   const handleSubmit = async ()=>{
      await axios.post(url, {
         email: email,
         password: password
      }).then((res)=>{
         console.log(res.data)
      }).catch((err)=>{
         console.log(err)
      })
   }
   return(
      <form className="flex flex-col gap-4 w-4/12 mx-auto mt-20 ">
         
         <div className="flex flex-col">
            {/* <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} /> */}
            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} />
         </div>
            {isRegister && 
              <div className="flex flex-col">
                 {/* <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} /> */}
                 <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)} />
              </div>
            }         
         <div className="flex flex-col">
            {/* <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} /> */}
            <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)} />
         </div>
         <div>
            <Button variant="contained" onClick={handleSubmit}>{isRegister ? "Register" : "Login"}</Button>
            <Link to={isRegister ? "/login" : "/register"} className="ml-4">
               <Button variant="outlined">{isRegister ? "Login" : "Register"}</Button>
            </Link>
            
         </div>
      </form>
   )
}