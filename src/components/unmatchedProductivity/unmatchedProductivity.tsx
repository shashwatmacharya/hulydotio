import React from 'react'
import KeyboardCardComp from '../utils/keyboardCard'
import TeamPlannerComp from '../utils/teamPlanner'

const UnmatchedProductivityComp: React.FC = () => {
  return (
    <section className='px-80 py-24 bg-white text-black'>
      <div>
        <h1 className='font-semibold text-[65px] tracking-tight'>Unmatched productivity.</h1>
        <p className='pt-4 tracking-tight w-[50%]'>Huly is a process, project, time, and knowledge management platform that provides amazing collaboration opportunities for developers and product teams alike.</p>
      </div>
      <div className='grid grid-cols-2 gap-3 pt-9'>
        <div className='h-[420px] w-[428px]'>
          <KeyboardCardComp />
          <p className='h-full flex justify-start items-end text-white px-4 pb-3'>Keyboard shortcuts. Work efficiently with instant access to common actions.</p>
        </div>
        <div className='h-[420px] w-[767px]'>
          <div className='h-full w-full'>
            <TeamPlannerComp />
          </div>
        </div>
        <div className='w-2/3 outline'>
          <div className='h-24 w-full bg-red-500'>
          </div>
        </div>
        <div className='w-1/3 outline'>
          <div className='h-24 w-full bg-red-500'>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UnmatchedProductivityComp