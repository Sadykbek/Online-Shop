import { Button, TextField } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useForm } from "@tanstack/react-form"
interface LoginFormProps {
  url: string
  isRegister?: boolean
}

export default function LoginForm({ url, isRegister }: LoginFormProps) {
   const navigate = useNavigate()
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
      name: ""
    },
    onSubmit: async ({ value }) => {
      try {
        // Формируем тело запроса
        const payload = isRegister
          ? value
          : { username: value.username, password: value.password }

        const response = await axios.post(url, payload)

        // Предположим, что в ответе есть токен
        const token = response.data
        if (token) {
          localStorage.setItem("accessToken", token.accessToken)
          localStorage.setItem("refreshToken", token.refreshToken)
          navigate("/")
        } else {
          alert("Успех, но токен не получен")
        }

        console.log("Ответ:", response.data)
      } catch (error: any) {
        alert("Ошибка: " + error?.response?.data?.message || error.message)
        console.error(error)
      }
    },
    
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className="flex flex-col gap-4 w-4/12 mx-auto mt-20"
    >
      <form.Field
        name="username"
        children={(field) => (
          <TextField
            label="Username"
            type="text"
            variant="outlined"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            required
          />
        )}
      />

      {isRegister && (
        <form.Field
          name="name"
          children={(field) => (
            <TextField
              label="Name"
              variant="outlined"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              required
            />
          )}
        />
      )}

      <form.Field
        name="password"
        children={(field) => (
          <TextField
            label="Password"
            type="text"
            variant="outlined"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            required
          />
        )}
      />

      <div>
        <Button variant="contained" type="submit">
          {isRegister ? "Register" : "Login"}
        </Button>
        <Link to={isRegister ? "/login" : "/register"} className="ml-4">
          <Button variant="outlined">
            {isRegister ? "Login" : "Register"}
          </Button>
        </Link>
      </div>
    </form>
  )
}
