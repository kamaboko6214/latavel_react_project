import { AuthContext } from '../components/RouterMain'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const Nav = () => {
    const navigate = useNavigate();
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const handleClick = () => {
        axios.post("api/logout",
        )
            .then((res) => {
                if (res) {
                    setIsAuth(false);
                    swal({ text: "ログアウトしました。", icon: "success" });
                    navigate('/');
                } else {
                    console.log('ログアウト失敗');
                }
            })
    }


    const navigation = (
        <div className='flex md:ml-auto'>
            <ul className='flex md:ml-auto'>
                <li><Link to='/top' className='mr-5 hover:text-teal-200 duration-300'>ホーム</Link></li>
                <li><Link to='/Mypage' className='mr-5 hover:text-teal-200 duration-300'>マイページ</Link></li>
                <li><Link to='/' className='mr-5 hover:text-teal-200 duration-300' onClick={handleClick}>ログアウト</Link></li>
            </ul>
        </div>
    )

    return (
        <>
            {isAuth ? navigation : ''}
        </>

    )
}

export default Nav