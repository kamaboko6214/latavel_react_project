import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext }  from '../components/RouterMain'

const getUser = async () => {
    const { data } = await axios.get('/api/user')
    return data
}

const login =  async ({ email, password }) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
        const data = await axios.get("/sanctum/csrf-cookie")
            .then((res) => {
                axios.post("api/login",
                    { email, password }
                )
                .then((res) => {
                    if (res.data.status == 200) {
                        setIsAuth(true)
                        swal({ text: "ログイン成功", icon: "success" });
                        console.log(isAuth)
                    } else {
                        console.log(res.data.message);
                    }
                })
                .catch((err) => {
                    console.log(err.response);
                    console.log('ログイン失敗');
                });
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



