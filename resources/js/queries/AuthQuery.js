import React from 'react'
import * as api from '../api/AuthAPI'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { AxiosError } from 'axios'

const useUser = () => {
    return useQuery('users', api.getUser)
}

const useLogin = () => {
    
    return useMutation(api.login, {
        onSuccess: (user) => {
            console.log(user)
        },
        onError: () => {
            console.log('失敗')
        }
    })
}

const useLogout = () => {

    return useMutation(api.logout, {
        onSuccess: (user) => {
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
    
