import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Login = () => {

  const navigate = useNavigate();

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
    const loginParams = { email, password }
    axios.get("/sanctum/csrf-cookie").then((res) => {
      axios.post("api/login",
        loginParams
      )
        .then((res) => {
          console.log(res.data);
          if (res.data.status == 200) {
            console.log('[login]ログイン成功');
            setUser(res.data.user);
            localStorage.setItem('auth_name', res.data.name);
            swal({text:"ログイン成功", icon:"success"});
            navigate('/top');
          } else {
            console.log(res.data.message);
            console.log('[login]ログイン失敗');
          }
        })
    })
  }
  const chekc = () => {
    axios.get("/sanctum/csrf-cookie").then((res) => {
      axios.get("api/user")
        .then((res) =>
          console.log(res.data)
        )
    })
  }
  return (
    <div className='bg-gray-100 mx-auto flex w-ful flex-col items-center'>
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
          <button onClick={chekc}>wao</button>
        </div>
      </div>
    </div>
  )
}

export default Login