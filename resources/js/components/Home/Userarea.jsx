import React from 'react'

const Userarea = (props) => {
    return (
        <div className='mx-auto'>
            <h1 className='text-white text-2xl font-bold'>{props.user}</h1>
            <div className='bg-white rounded-full h-44 w-44 mx-auto mt-3'>
                <img className='mx-auto pt-4' src="img/hitode.png" alt="" />
            </div>
            <div className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium quis repellat reiciendis, commodi aspernatur cons
                ectetur at soluta exercitationem possimus iusto facilis, prov
                ident mollitia incidunt corrupti totam sapiente numquam eum harum.</div>
        </div>
    )
}

export default Userarea