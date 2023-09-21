import axios from "axios" //conectar front com o back

export const server = axios.create({
  baseURL: "http://localhost:3333",
})

