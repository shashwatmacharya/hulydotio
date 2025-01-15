import React from 'react'

const KeyboardCardComp: React.FC = () => {
    return (
        <div className="h-full w-full bg-[url('/assets/images/keyboard.jpg')] bg-cover bg-center rounded-xl flex flex-col justify-between items-center">
            <div className='h-full text-white flex justify-center items-center pb-[80px]'>
                <div className='py-3 w-80 rounded-2xl bg-[#191719] opacity-75 flex flex-col'>
                    <div className='m-2 p-2 bg-[#130f0d] flex justify-between items-center rounded-lg'>
                        <div className='flex justify-start items-center gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#717172" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                            <p className='text-[#a2a0a0]'> | </p>
                            <p className='text-[#a2a0a0]'>Run Command...</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#424142" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </div>
                    <p className='text-[#605e5f] text-[13px] pl-3'>Actions</p>
                    <div className='px-2 flex flex-col'>
                        <div className='px-2 py-2 flex justify-between items-center hover:bg-[#2a2525] rounded-md cursor-pointer'>
                            <div className='text-[14px]'>Mark as done</div>
                            <div className='bg-[#3b393b] flex justify-center items-center p-[3px] rounded text-[11px]'>V</div>
                        </div>
                        <div className='px-2 py-2 flex justify-between items-center hover:bg-[#2a2525] rounded-md cursor-pointer'>
                            <div className='text-[14px]'>Open To Do List</div>
                            <div className='bg-[#3b393b] flex justify-center items-center p-[3px] rounded text-[11px]'>B</div>
                        </div>
                        <div className='px-2 py-2 flex justify-between items-center hover:bg-[#2a2525] rounded-md cursor-pointer'>
                            <div className='text-[14px]'>Switch to Timeline View</div>
                            <div className='bg-[#3b393b] flex justify-center items-center p-[3px] rounded text-[11px]'>M</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyboardCardComp