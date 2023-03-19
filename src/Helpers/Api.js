import axios from "axios";
const backend = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_deployedLink
      : process.env.NEXT_PUBLIC_dummyLink,
});

export default backend;
