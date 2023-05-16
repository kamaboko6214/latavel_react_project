import { AuthContext }  from '../components/RouterMain'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useLogin, useLogout, useUser } from '../queries/AuthQuery'


const Nav = () => {
    const logout = useLogout();
    const login = useLogin();
    const navigate = useNavigate();
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const navigation = (
        <ul className='flex md:ml-auto'>
            <li><Link to='/top' className='mr-5 hover:text-teal-200 duration-300'>ホーム</Link></li>
            <li><Link to='/Mypage' className='mr-5 hover:text-teal-200 duration-300'>マイページ</Link></li>
            <li><Link to='#' className='mr-5 hover:text-teal-200 duration-300'>設定</Link></li>
            <li><Link to='/' className='mr-5 hover:text-teal-200 duration-300' onClick={() => logout.mutate()}>ログアウト</Link></li>
        </ul>
    )

    const loginNavigation = (
        <ul className='flex md:ml-auto'>
            <li><Link to='/' className='mr-5 hover:text-teal-200 duration-300' onClick={() => login.mutate()}>ログイン</Link></li> 
        </ul>
    )

    return (
        <div className='flex md:ml-auto'>
            {isAuth ? navigation : loginNavigation}
        </div>

    )
}

export default Nav