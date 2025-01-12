import React from 'react'

const NavbarComp: React.FC = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-16'>
                <div>
                    <img src="/assets/images/hulylogo.svg" alt="" className='h-7' />
                </div>
                <div className='flex gap-5'>
                    <p>Pricing</p>
                    <p>Resources</p>
                    <p>Community</p>
                    <p>Download</p>
                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <p>star us</p>
                <button className='border-white border rounded-full px-2 py-1 font-semibold'>sign in</button>
                <button className='border-white border rounded-full px-2 py-1 font-semibold'>get started</button>
            </div>
        </div>
    )
}

export default NavbarComp