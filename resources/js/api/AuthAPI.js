import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const getUser = async () => {
    const { data } = await axios.get('/api/user')
    return data
}

const login =  async ({ email, password }) => {
       
        const data = await axios.get("/sanctum/csrf-cookie").then((res) => {
            axios.post("api/login",
                { email, password }
            )
                .then((res) => {
                    if (res.data.status == 200) {
                        swal({ text: "ログイン成功", icon: "success" });
                    } else {
                        console.log(res.data.message);
                    }
                })
        })
        return data
}

const logout =  async () => {
    const { data } = await axios.post("api/logout")
    return data
}

export {
    getUser,
    login,
    logout
} 



