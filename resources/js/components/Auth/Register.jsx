import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleClick = () => {
    const loginParams = { name, email, password }
    axios.get("/sanctum/csrf-cookie").then((res) => {
      axios.post("api/register",
        loginParams
      )
        .then((res) => {
          console.log(res.data);
          if (res.data.result) {
            setUser(res.data.user);
            localStorage.setItem('auth_name', res.data.username);
            swal({text:"ユーザー登録完了", icon:"success"});
            navigate('/top');
          } else {
            console.log('NG');
          }
        })
    })
  }

  return (
    <div className='bg-gray-100 mx-auto flex w-ful flex-col items-center'>
      <h1 className='text-4xl r text-gray-900 font-bold mt-9 item-center'>新規登録</h1>
      <div className='block max-w-sm rounded-lg mx-auto shadow mb-44 mt-20 border-gray-200  bg-gray-200 text-center w-3/4 h-auto'>
        <div className='mx-auto items-center'>
          <h3 className='mt-6'>名前</h3>
          <input type="text" className='text-gray-800 mb-6 h-16 w-5/6' onChange={changeName} />
        </div>
        <div className='mx-auto items-center'>
          <h3 >メールアドレス</h3>
          <input type="text" className='text-gray-800 mb-6 h-16 w-5/6' onChange={changeEmail} />
        </div>
        <div>
          <h3>パスワード</h3>
          <input type="password" className='text-gray-800 mb-14 h-16  w-5/6' onChange={changePassword} />
        </div>
        <div>
          <button className='bg-green-300 cursor-pointer h-16  w-5/6' onClick={handleClick}>登録</button>
        </div>
      </div>
    </div>
  )
}

export default Login