import {$host,$authHost} from "./index";

export const registration= async (email,password)=>{
    const responce=await $host.post("api/user/registration",{email,password,role:"ADMIN"})
    return responce
}
export const login= async (email,password)=>{
    const responce=await $host.post("api/user/login",{email,password})
    return responce
}
export const check= async ()=>{
    const responce=await $host.post("api/auth/registration")
    return responce
}