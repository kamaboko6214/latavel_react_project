import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useLogout, useUser } from '../queries/AuthQuery'
// import useAuth from '../hooks/AuthContext'

const Nav = () => {
    const logout = useLogout();
    const [user, setuser] = useState();
    const navigate = useNavigate();
    // const [isAuth, setIsAuth] = useAuth();

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
            <li><Link to='#' className='mr-5 hover:text-teal-200 duration-300'>設定</Link></li>
        </ul>
    )

    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        axios.get('api/user').then((response) => {
            setuser(response.data)
        })
    }

    return (
        <div className='flex md:ml-auto'>
            {/* {isAuth ? navigation : loginNavigation} */}
            {navigation}
        </div>

    )
}

export default Nav