import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const Nav = (props) => {
    const [user,setuser] = useState(props.user);
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
            console.log(res.data)
          })
          .catch(err => {
            console.log(err);
          });
      };

      const handleClick = () => {
        const loginParams = { email: 'sample@ewample.com', password: 'password' }
        axios.get("/sanctum/csrf-cookie").then((res) => {
            axios.post("api/login",
                loginParams
            )
                .then((res) => {
                    console.log(res.data);
                    if (res.data.result) {
                        setuser(res.data.user);
                        swal({ text: "ゲストログイン", icon: "success" });
                        navigate('/top');
                    } else {
                        console.log('NG');
                    }
                })
        })
    }

    let form = (
        <ul className='flex md:ml-auto'>
            <li><Link to='/register' className='mr-5 hover:text-teal-200 duration-300'>新規登録</Link></li>
            <li><Link to='/login' className='mr-5 hover:text-teal-200 duration-300'>ログイン</Link></li>
            <li><Link className='mr-5 hover:text-teal-200 duration-300' onClick={handleClick}>ゲストログイン</Link></li>
        </ul>
    )

    if (user) {
        form =
            <ul className='flex md:ml-auto'>
                <li><Link to='/top' className='mr-5 hover:text-teal-200 duration-300'>ホーム</Link></li>
                <li><Link to='/Mypage' className='mr-5 hover:text-teal-200 duration-300'>マイページ</Link></li>
                <li><Link to='#' className='mr-5 hover:text-teal-200 duration-300'>設定</Link></li>
                <li><Link to='/' className='mr-5 hover:text-teal-200 duration-300' onClick={logout}>ログアウト</Link></li>
            </ul>
    }

    return (
        <div className='flex md:ml-auto'>
            {form}
        </div>
    )
}

export default Nav