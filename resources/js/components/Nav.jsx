import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <ul className='flex md:ml-auto'>
            <li><Link to='/top' className='mr-5 hover:text-teal-200 duration-300'>ホーム</Link></li>
            <li><Link to='#' className='mr-5 hover:text-teal-200 duration-300'>マイページ</Link></li>
            <li><Link to='#' className='mr-5 hover:text-teal-200 duration-300'>設定</Link></li>
            <li><Link to='/login' className='mr-5 hover:text-teal-200 duration-300'>ログイン</Link></li>
        </ul>
    )
}

export default Nav