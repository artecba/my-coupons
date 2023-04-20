import React, { useEffect, useState } from 'react'
import { connect } from 'frontity'
import Link from './Link'

const Header = ({ state }) => {

    const [email, setEmail] = useState('')

    useEffect(() => {
       
        //state.theme.user ? setEmail(state.theme.user) : setEmail('')
        setEmail(state.theme.user)
        console.log('user en header...', state.theme.user)

    }, [state.theme.user])


    return (
        <>

            <Link href="/">Home</Link> //
            <Link href="/category/coupons/">Coupons</Link> //
            <Link href="/ingresa2/">Login</Link>
            <div>Welcolme ... { email.length > 0  ? email: 'Guest'} </div>
        </>
    )
}

export default connect(Header)