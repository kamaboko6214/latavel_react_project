import React, { useState } from 'react'

const Login = () => {

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
    axios
      // CSRF保護の初期化
      .get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true })
      .then((response) => {
      // ログイン処理
        axios
          .post(
            'http://localhost:8000/api/login',
            loginParams,
            { withCredentials: true }
          )
          .then((response) => {
            console.log(response.data)
          })
      })
  }

  const handleUserClick = () => {
    axios.get('http://localhost:8000/api/user',).then((response) => {
      console.log(response.data)
    })
  }

  return (
    <div className='bg-gray-100 mx-auto flex w-ful flex-col items-center'>
      <h1 className='text-4xl r text-gray-900 font-bold mt-9 item-center'>ログイン</h1>
      <div className='block max-w-sm rounded-lg mx-auto shadow mb-44 mt-20 border-gray-200  bg-gray-200 text-center w-3/4 h-96'>
        <div className='mx-auto items-center'>
          <h3 className='mt-6'>メールアドレス</h3>
          <input type="text" className='text-gray-800 mb-10 h-16 w-5/6' onChange={changeEmail}/>
        </div>
        <div>
          <h3>パスワード</h3>
          <input type="password" className='text-gray-800 mb-14 h-16  w-5/6' onChange={changePassword}/>
        </div>
        <div>
          <button value="ログイン" className='bg-green-300 cursor-pointer h-16  w-5/6' onClick={handleClick}>ログイン</button>
        </div>
        <button onClick={handleUserClick}>ユーザー情報を取得</button>
      </div>
    </div>
  )
}

export default Login