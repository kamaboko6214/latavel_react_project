import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const Nav = () => {
    const [user, setuser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        axios.get('api/user').then((response) => {
            setuser(response.data)
        })
    }

    const logout = () => {
        axios.post('api/logout').then((res) => {
            setuser(null);
        })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className='flex md:ml-auto'>
            <ul className='flex md:ml-auto'>
                <li><Link to='/top' className='mr-5 hover:text-teal-200 duration-300'>ホーム</Link></li>
                <li><Link to='/Mypage' className='mr-5 hover:text-teal-200 duration-300'>マイページ</Link></li>
                <li><Link to='#' className='mr-5 hover:text-teal-200 duration-300'>設定</Link></li>
                <li><Link to='/' className='mr-5 hover:text-teal-200 duration-300' onClick={logout}>ログアウト</Link></li>
            </ul>
        </div>
    )
}

export default Nav