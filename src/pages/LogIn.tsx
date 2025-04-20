import LoginForm from "../components/login/LoginForm"

export default function LogIn() {
   return(
      <div>
         <LoginForm url="https://dummyjson.com/auth/login" isRegister={false} />
      </div>
   )
}