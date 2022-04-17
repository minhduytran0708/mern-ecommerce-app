import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWE2NTMxYTc2ZTNiYjA2NjAwMzJhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDE4MDgyMiwiZXhwIjoxNjUwNDQwMDIyfQ.0xo0LQOzJTdwJpg3XJAC2AKaihuFg860n_Tv4QJPiog";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});