import React from 'react'
import { connect } from 'frontity'
import Link from './Link'

const Header = () => {
    return (
        <>
            <Link href="/">Home</Link> //             
            <Link href="/category/coupons/">Coupons</Link>
        </>
    )
}

export default Header