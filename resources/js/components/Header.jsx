import React, { useEffect, useState } from 'react'

const Header = () => {
  const [users, setUsers] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user")
      .then((response) => setUsers(response.data[0]))
      .catch((error) => console.log(error));
  }, []);
console.log({users})
  return (
    <div className="text-white top-0 z-10 bg-green-bg ">
      <div className='container mx-auto py-3 flex items-center md:flex-row'>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          </svg>
        </span>
        <span className='text-xl font-bold'>
          ストチャレ！
        </span>
        <ul className='flex md:ml-auto'>
          <li><a  href='#' className='mr-5 hover:text-teal-200 duration-300'>ホーム</a></li>
          <li><a  href='#' className='mr-5 hover:text-teal-200 duration-300'>マイページ</a></li>
          <li><a  href='#' className='mr-5 hover:text-teal-200 duration-300'>設定</a></li>
        </ul>
        <input type="text" value={users.id} className='text-gray-900'/>
      </div>

    </div>
  )
}

export default Header
