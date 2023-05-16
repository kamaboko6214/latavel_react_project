import React, { useContext } from 'react'
import * as api from '../api/AuthAPI'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { AxiosError } from 'axios'
import { AuthContext }  from '../components/RouterMain'

const useUser = () => {
    return useQuery('users', api.getUser)
}

const useLogin = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return useMutation(api.login, {
        onSuccess: (user) => {
            setIsAuth(true)
            console.log(isAuth)
        },
        onError: () => {
            console.log('失敗')
        }
    })
}

const useLogout = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return useMutation(api.logout, {
        onSuccess: (user) => {
            setIsAuth(false)
            console.log(user)
        },
        onError: () => {
            console.log('失敗')
        }
    })
}

export {
    useUser,
    useLogin,
    useLogout
}
    
