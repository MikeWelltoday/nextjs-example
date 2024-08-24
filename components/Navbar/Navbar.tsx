import React from 'react'
import Link from 'next/link'
import s from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <div className={s.navbar}>
            <Link href={'/'}>Main</Link>
            <Link href={'/characters'}>Characters</Link>
        </div>
    )
}