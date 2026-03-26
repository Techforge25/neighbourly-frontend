"use client";
import axios from "axios";

// Axios config
const api = axios.create({
    baseURL:process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials:true,
    timeout:0,
    auth: true,
    withXSRFToken:true
});

export { api };