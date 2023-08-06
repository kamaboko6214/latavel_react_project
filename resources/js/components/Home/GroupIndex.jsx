import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../RouterMain';
import Rank from './Rank'
import Userarea from './Userarea'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import useUpdateEffect from '../../hooks/useUpdateEffect'

const GroupIndex = () => {
  const [article, setArticle] = useState([])
  const [isarticle, setIsarticle] = useState(false)

  const getarticle = () => {
    axios.get("/sanctum/csrf-cookie").then(() => {
      axios.get("/api/article")
        .then((res) => {
          if (res.status == 200) {
            for (let i = 0; i < res.data.length; i++) {
              setIsarticle(true)
              setArticle((prev) => [...prev, res.data[i].title]);
              // setArticle((prev) => [...prev, i]);
              console.log(i)
              // console.log(res.data[i].title)
            }
          } else {
            console.log('失敗')
          }
        })
    })
  }

  useEffect(() => {
    getarticle();
  }, []);

  const check = () => {
    console.log(article)
  }

  const nothingMessage = (
    <>
      <img src="img/Website-Builder-color-800px.png" className='mt-10 mx-auto h-96 w-96 opacity-80' alt="" />
      <h1 className='text-6xl font-bold text-gray-400 '>投稿がありません。</h1>
      <Link to='/create'>
        <div class="shadow-lg hover:bg-green-700 duration-300 fixed z-50 bottom-20 right-8 py-10 h-28 w-28 justify-center border-2 bg-green-600 rounded-full cursor-pointer">
          <h1 class="font-bold text-2xl text-white">投稿</h1>
        </div>
      </Link>
    </>
  )

  const indexarticle = (
    <>
      <ul>
        {article.map(value =>
          <li class="justify-between gap-x-6 py-5 mb-10 border-gray-200 w-full mx-auto pr-10">
            <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                <div class="min-w-0 flex-auto">
                  <div>題名：{value}</div>
              </div>
              <div class="flex">
                <button class="cursor-pointe shadow-xl px-5 py-2 inline-block text-orange-100 hover:bg-gray-100 mr-10 rounded" ><svg class="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                </button>
                <button class="cursor-pointe shadow-xl px-5 py-2 inline-block text-orange-100 hover:bg-gray-100 mr-10 rounded" >
                  <svg class="h-8 w-8 text-blue-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="5" cy="12" r="1" />  <circle cx="12" cy="12" r="1" />  <circle cx="19" cy="12" r="1" /></svg>
                </button>
              </div>
            </div>
          </li>
        )}
      </ul>
      <Link to='/create'>
        <div class="shadow-lg hover:bg-green-700 duration-300 fixed z-50 bottom-20 right-8 py-10 h-28 w-28 justify-center border-2 bg-green-600 rounded-full cursor-pointer">
          <h1 class="font-bold text-2xl text-white">投稿</h1>
        </div>
      </Link>
    </>
  )



  return (
    <div className='mx-auto bg-white-bg'>
      <div className=" text-center flex pb-20">
        <div id='body' className='w-1/4 mt-20 text-center'>
          <Userarea />
          <Rank />
        </div>
        <div className='w-3/4'>
          <h1 className='text-gray-600 font-bold text-3xl mt-6'>
            投稿一覧
          </h1>
          <button onClick={check}>チェック</button>
          <div>
            <ul>
              {isarticle ? indexarticle : nothingMessage}
            </ul>
          </div>
        </div>
      </div>
      <div className='pb-10'>
        <ul className='flex justify-center items-center'>
          <li className='bg-white rounded-full h-16 w-16 mt-3 mx-2 hover:bg-gray-200 duration-300'></li>
          <li className='bg-white rounded-full h-16 w-16 mt-3 mx-2 hover:bg-gray-200 duration-300'></li>
          <li className='bg-white rounded-full h-20 w-20 mt-3 mx-2 hover:bg-gray-200 duration-300'></li>
          <li className='bg-white rounded-full h-16 w-16 mt-3 mx-2 hover:bg-gray-200 duration-300'></li>
          <li className='bg-white rounded-full h-16 w-16 mt-3 mx-2 hover:bg-gray-200 duration-300'></li>
        </ul>
      </div>
    </div>
  )
}

export default GroupIndex
