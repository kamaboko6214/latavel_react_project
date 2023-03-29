import React from 'react'

const Login = () => {
  return (
    <div className='bg-bg-content text-white mx-auto h-64'>
      <div className='block max-w-sm rounded-lg mx-auto shadow mt-10 mb-10 border-gray-200  bg-gray-200 text-center'>
        <div className='mx-auto items-center'>
          <h3 className=''>メールアドレス</h3>
          <input type="text" className='text-gray-800' />
        </div>
        <div>
          <h3>パスワード</h3>
          <input type="text" className='text-gray-800' />
        </div>
        <div>
          <button value="ログイン" className='bg-green-200 cursor-pointer'>ログイン</button>
        </div>
      </div>
    </div>
  )
}

export default Login