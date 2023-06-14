import React from 'react'

const Mypage = () => {
  return (
    <div className='bg-white-bg'>
      <div>
        <h2 className='text-3xl text-center text-gray-600 mt-10'>マイページ</h2>
      </div>
      <div id='body' className='h-96 pb-20 w-ful flex items-center justify-center flex-col'>
        <div className='bg-white rounded-full h-44 w-44 mx-auto  absolute z-50'>
          <img className='mx-auto pt-4 z-50' src="img/hitode.png" alt="" />
        </div>
        <div className='w-full text-center z-0 px-14 '>
          <div className='bg-white mx-auto relative top-28 rounded-lg pt-5'>
            <h2 className='text-2xl mt-10'>ユーザーネーム</h2>
            <h2 className='text-2xl mt-10'>性別</h2>
            <h2 className='text-2xl mt-10'>生年月日</h2>
            <h2 className='text-2xl mt-10'>自己紹介文</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mypage
