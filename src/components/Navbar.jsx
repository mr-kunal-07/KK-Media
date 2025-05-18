import { Button } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <div className='select-none flex justify-between items-center  w-screen px-7 py-2 shadow-lg'>
            {/* <h1>KK Media</h1> */}
            <img src="./Logo1.png" className='w-35 mt-[-45px] mb-[-45px] ' alt="" />

            {/* Links */}
            <ul className='flex bubblegum-sans-regular gap-9 items-center cursor-pointer text-2xl'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>

                {/* CTA */}
                <Button style={{ backgroundColor: 'black' }} variant="contained" >Get a Free Consultation</Button>
            </ul>
        </div>
    )
}

export default Navbar