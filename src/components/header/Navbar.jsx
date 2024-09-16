
import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
function Navbar() {
    const { user, isSignedIn } = useUser();
    return (
        <div className=' bg-white shadow-md top-0 sticky z-30'>
            <div className="main mx-4 md:mx-16 lg:mx-24 p-3">
                <div className="flex justify-between items-center ">
                    <div className="logo cursor-pointer">
                    <Link to={'/'}><img src="/logo.jpg" alt="img" className='w-24' /></Link>
                    </div>
                    <div className="menu hidden md:block">
                        <ul className='flex justify-center space-x-8 cursor-pointer '>
                            <Link to={'/'}><li className=' hover:scale-105 hover:transition-all font-medium'>Home</li></Link>
                            <Link to={'/search'}><li className=' hover:scale-105 hover:transition-all font-medium'>Search</li></Link>
                            <Link to={'/new'}><li className=' hover:scale-105 hover:transition-all font-medium'>New</li></Link>
                            <Link to={'/preowned'}><li className=' hover:scale-105 hover:transition-all font-medium'>preowned</li></Link>
                        </ul>
                    </div>
                    <div className="auth">
                        {isSignedIn ?
                            <div className='flex items-center gap-3'>
                                <UserButton />
                                <Button className='hidden md:block' >Submit Listing</Button>
                            </div> :
                            <div>
                                <Button className='hidden md:block'>Submit Listing</Button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
