import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../RouterMain';

const Login = () => {

  const navigate = useNavigate();

  const [name, setName]   = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }
  const changeName = (e) => {
    setName(e.target.value)
  }

  const handleClick = () => {
    const loginParams = { name, email, password }
    axios.get("/sanctum/csrf-cookie")
      .then(() => {
        axios.post("api/register",
          loginParams
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.status == 200) {
            console.log('[login]ログイン成功');
            setIsAuth(true);
            swal({ text: "ログイン成功", icon: "success" });
            navigate('/top');
          } else {
            console.log(res.data.message);
            console.log('[login]ログイン失敗');
          }
        })
    })
  }

  return (
    <div className='bg-gray-100 flex w-ful flex-col items-center'>
      <h3 className='pt-5'>アカウントをお持ちの場合はこちら <span><Link to='/login'>ログイン</Link></span></h3>
      <h1 className='text-4xl r text-gray-900 font-bold mt-9 item-center'>新規登録</h1>
      <div class="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Signin To Your Account
        </div>
        <div class="mt-8">
          <form action="#" autoComplete="off">
            <div class="flex flex-col mb-2">
              <div class="flex relative ">
                <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                    </path>
                  </svg>
                </span>
                <input type="text" id="sign-in-email" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your name" onChange={changeName} />
              </div>
            </div>
            <div class="flex flex-col mb-2">
              <div class="flex relative ">
                <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                    </path>
                  </svg>
                </span>
                <input type="text" id="sign-in-email" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email" onChange={changeEmail} />
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <div class="flex relative ">
                <span class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                    </path>
                  </svg>
                </span>
                <input type="password" id="sign-in-email" class=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password" onChange={changePassword} />
              </div>
            </div>
            <div class="flex items-center mb-6 -mt-4">
              <div class="flex ml-auto">
                <a href="#" class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                  Forgot Your Password?
                </a>
              </div>
            </div>
            <div class="flex w-full">
              <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={handleClick}>
                Signin
              </button>
            </div>
          </form>
        </div>
        <div class="flex items-center justify-center mt-6">
          <a href="#" target="_blank" class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
            <span class="ml-2">
              You don&#x27;t have an account?
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login