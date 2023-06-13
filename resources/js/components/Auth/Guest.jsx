import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useCookies } from 'react-cookie';
import { AuthContext } from '../RouterMain';

const Guest = () => {
    const [user, setuser] = useState(null);
    const navigate = useNavigate();
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const handleClick = () => {
        const loginParams = { email: 'sample@ewample.com', password: 'password' }
        axios.get("/sanctum/csrf-cookie").then((res) => {
            axios.post("api/login",
                loginParams
            )
                .then((res) => {
                    if (res.data.result) {
                        setuser(res.data.user);
                        swal({ text: "ゲストログイン", icon: "success" });
                        setIsAuth(res.data.result);
                        navigate('/top');
                    } else {
                        console.log('NG');
                    }
                })
        })
    }

    return (
            <button className='bg-oriblue h-20 w-96 text-white font-bold text-2xl shadow-md rounded-lg hover:bg-hovercol duration-300' onClick={handleClick}>ゲスト登録！</button>
    )
}

export default Guest
