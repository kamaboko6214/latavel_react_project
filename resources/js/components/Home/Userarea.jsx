import React, { useContext } from 'react'
import { AuthContext } from '../RouterMain';

const Userarea = () => {
    const { userinfo, setUserinfo } = useContext(AuthContext);
    
    return (
        <div className='mx-auto'>
            <h1 className='text-gray-600 text-2xl font-bold'>{userinfo.name}</h1>
            <div className='bg-white rounded-full h-44 w-44 mx-auto mt-3 border-solid border-2 border-sky-500'>
                <img className='mx-auto pt-4' src="img/hitode.png" alt="" />
            </div>
            <div className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium quis repellat reiciendis, commodi aspernatur cons
                ectetur at soluta exercitationem possimus iusto facilis, prov
                ident mollitia incidunt corrupti totam sapiente numquam eum harum.</div>
        </div>
    )
}

export default Userarea