import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { useCookies } from 'react-cookie';
import { useLogin } from '../../queries/authquery'

const Login = () => {
  const login = useLogin();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['user']);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleClick = () => {
    login.mutate({ email,password})
  }

  return (
    <div className='bg-white mx-auto flex w-ful flex-col items-center h-full'>
      <h3 className='pt-5'>アカウントをお持ちでない場合はこちら <span><Link to='/register'>新規登録</Link></span></h3>
      <h1 className='text-4xl r text-gray-900 font-bold mt-9 item-center'>ログイン</h1>
      <div className='block max-w-sm rounded-lg mx-auto shadow mb-44 mt-20 border-gray-200  bg-gray-200 text-center w-3/4 h-96'>
        <div className='mx-auto items-center'>
          <h3 className='mt-6'>メールアドレス</h3>
          <input type="text" className='text-gray-800 mb-10 h-16 w-5/6' onChange={changeEmail} />
        </div>
        <div>
          <h3>パスワード</h3>
          <input type="password" className='text-gray-800 mb-14 h-16  w-5/6' onChange={changePassword} />
        </div>
        <div>
          <button value="ログイン" className='bg-green-300 cursor-pointer h-16  w-5/6' onClick={handleClick}>ログイン</button>
        </div>
      </div>
    </div>
  )
}

export default Login