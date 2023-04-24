import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const Guest = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleClick = () => {
        const loginParams = { email: 'sample@ewample.com', password: 'password' }
        axios.get("/sanctum/csrf-cookie").then((res) => {
            axios.post("api/login",
                loginParams
            )
                .then((res) => {
                    console.log(res.data);
                    if (res.data.result) {
                        setUser(res.data.user);
                        swal({ text: "ゲストログイン", icon: "success" });
                        navigate('/top');
                    } else {
                        console.log('NG');
                    }
                })
        })
    }

    return (
        <div className='pb-10'>
            <button className='bg-oriblue h-20 w-96 text-white font-bold text-2xl shadow-md rounded-lg hover:bg-hovercol duration-300' onClick={handleClick}>ゲスト登録！</button>
        </div>

    )
}

export default Guest
