import React from 'react'

const  Top = () => {
  return (
    <div className='bg-gradient-to-l bg-green-bg'>
        <div>
            <h1 className='text-6xl text-white font-bold pt-16 text-center' >ストチャレ</h1>
        </div>
        <div>
            <h1 className='text-5xl pt-24 text-center font-bold text-white tracking-wider'>ストイック<span className='text-gray-900 text-4xl' >な</span>チャレンジ<span className='text-gray-900 text-4xl' >を</span><br/>共有<span className='text-gray-900 text-4xl' >しよう</span></h1>
        </div>
        <div className='text-center mt-12' >
            <div className='mb-10'>
                <button className='bg-oriblue h-20 w-96 text-white font-bold text-2xl shadow-md rounded-lg hover:bg-hovercol duration-300'>新規登録する！</button>
            </div>
            <div className='mb-10'>
                <button className='bg-oriblue h-20 w-96 text-white font-bold text-2xl shadow-md rounded-lg hover:bg-hovercol duration-30'>ログインする！</button>
            </div>
            <div className='pb-10'>
                <button className='bg-oriblue h-20 w-96 text-white font-bold text-2xl shadow-md rounded-lg hover:bg-hovercol duration-30'>ゲスト登録！</button>
            </div>
        </div>
    </div>
  )
}

export default  Top