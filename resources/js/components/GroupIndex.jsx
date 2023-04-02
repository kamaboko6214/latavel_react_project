import React from 'react'

const GroupIndex = () => {
  return (
    
    <div className='mx-auto bg-bg-content'>
      <div className=" text-center flex pb-20">
        <div id='body' className='w-1/4 mt-20 text-center'>
          <div className='mx-auto'>
            <h1 className='text-white text-2xl font-bold'>ユーザーネーム</h1>
            <div className='bg-white rounded-full h-44 w-44 mx-auto mt-3'></div>
            <div className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium quis repellat reiciendis, commodi aspernatur cons
              ectetur at soluta exercitationem possimus iusto facilis, prov
              ident mollitia incidunt corrupti totam sapiente numquam eum harum.</div>
          </div>
          <div className='mt-40 mx-auto mb-40'>
            <h1 className='text-white text-2xl font-bold'>ランキング</h1>
            <div className='container h-10 w-80 bg-slate-50 mt-10 mx-auto'></div>
            <div className='container h-10 w-80 bg-slate-50 mt-10 mx-auto'></div>
            <div className='container h-10 w-80 bg-slate-50 mt-10 mx-auto'></div>
            <div className='container h-10 w-80 bg-slate-50 mt-10 mx-auto'></div>
            <div className='container h-10 w-80 bg-slate-50 mt-10 mx-auto'></div>
          </div>
        </div>
        <div className='w-3/4'>
          <h1 className='text-gray-50 font-bold text-3xl mt-4'>
            グループ一覧
          </h1>
          <div className=''>
            <ul className>
              <li className='container h-48 w-3/4 bg-slate-50 mt-10 mx-auto'></li>
              <li className='container h-48 w-3/4 bg-slate-50 mt-10 mx-auto'></li>
              <li className='container h-48 w-3/4 bg-slate-50 mt-10 mx-auto'></li>
              <li className='container h-48 w-3/4 bg-slate-50 mt-10 mx-auto'></li>
              <li className='container h-48 w-3/4 bg-slate-50 mt-10 mx-auto'></li>
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
