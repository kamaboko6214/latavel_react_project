import React, { useEffect, useState } from 'react'

const Authcheck = () => {
    const [user, setuser] = useState('')

    useEffect(() => {
        usercheck()
    }, [])

    const usercheck = () => {
        axios.get('api/user').then((response) => {
            console.log(response.data)
            setuser(response.data)
        })
    }
    return (
        {user}
    )

}

export default Authcheck
