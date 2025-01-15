import React from 'react'

const TeamPlannerComp: React.FC = () => {
    return (<>
        <div className="h-full w-full bg-[url('/assets/images/teamPlannerBackGround.png')] bg-cover bg-center flex justify-center items-center rounded-lg">
            <div className="h-[300px] w-[300px]">
                <div className="h-full w-full bg-[url('/assets/images/teamPlannerBase.png')] bg-cover">
                    <div className='px-3 pt-4 w-[275px] bg-[#f9f7f8]'>
                        <p className='bg-[#c8ead7] text-[#8ca898] px-[2px] py-[1px]'>Low</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default TeamPlannerComp