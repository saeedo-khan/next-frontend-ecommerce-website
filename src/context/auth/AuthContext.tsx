import { useRouter } from 'next/router'
import React, { createContext, useContext, useState } from 'react'
import axios from 'axios';
import { parseCookies, setCookie } from 'nookies'
import toast from 'react-hot-toast';

interface AuthContextProps {
    children: React.ReactNode,
}


interface IContextAuth{
    getLogin: (email: string, password: string) => void;
    signUp: (username:string, email:string, password: string) => void;
    loading: boolean;
}



const AuthContext = createContext({} as IContextAuth)

export const AuthContextProvider = ({children}: AuthContextProps) => {

    const [loading, setLoading] = useState<boolean>(false)
    
    const router = useRouter()

    const cookies = parseCookies()
    

    const getLogin = async(email: string, password: string) => {
        setLoading(true)
        await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_HEROKU}/api/auth/local`, {"identifier" : email, "password": password})
        .then(res => {
            setLoading(false)
            toast.success('Login succesed', {position: 'top-center'})
            setCookie(null, 'formClient', res.data.jwt, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            })
            router.push('/')
        })
        .catch(err => {
            setLoading(false)
            console.log(err)
            toast.error('Error occured', {position: 'top-center'})
        })

    }

    const signUp = async(username: string, email:string, password: string) => {
        setLoading(true)
        try{
            await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_HEROKU}/api/auth/local/register`, {
                username,
                email,
                password
            }, {
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                setLoading(false)
                toast.success('Loged in succes', {position: 'top-center', duration: 4000})
                setCookie(null, 'formClient', res.data.jwt, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/'
                })
                router.push('/cart')
            })
        }
        catch(err){
            setLoading(false)
            console.log(err)
            toast.error('error occured', {position: 'top-center'})
        }
    }


    return (
        <AuthContext.Provider value={{  getLogin, loading, signUp}}>
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuth(){
    return useContext(AuthContext)
}