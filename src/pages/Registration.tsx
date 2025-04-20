import LoginForm from "../components/login/LoginForm"

export default function Registration() {
   return (
      <div>
         <LoginForm url="https://dummyjson.com/auth/register" isRegister={true} />
      </div>
   )
}