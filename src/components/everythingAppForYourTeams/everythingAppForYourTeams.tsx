import React, { useRef } from 'react'
import NavbarComp from './navbar'

const EAFYTComp: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    const dot = button?.querySelector('#dot') as HTMLDivElement;

    if (button && dot) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - dot.offsetWidth / 2;
      const y = e.clientY - rect.top - dot.offsetHeight / 2;
      dot.style.transition = 'transform 100ms ease-out';
      dot.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  return (
    <div className='px-80 pt-8'>
      <NavbarComp />
      <div className='pt-36'>
        <div>
          <p className='font-bold text-[75px] leading-4'>Everything App</p>
          <p className='font-bold text-[75px]'>for your teams</p>
        </div>
        <p className='font-medium text-[20px] w-[40%] pt-3'>Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.</p>
        <button
          ref={buttonRef}
          className="mt-10 flex justify-center items-center text-white bg-red-500 rounded-full w-[223px] h-[40px] relative overflow-hidden"
          onMouseMove={handleMouseMove}
        >
          Try it free
          <div
            id="dot"
            className="absolute top-0 left-0 w-[40px] h-[100px] bg-white rounded-full transition-transform duration-50 ease-in-out pointer-events-none"
          ></div>
        </button>
        <img src="/assets/images/hero-illustration.jpg" alt="" className='pt-40 w-[80%]' />
        <div className='pt-8 pb-7'>
          <p>Everything you need for productive team work:</p>
          <div className='flex items-center gap-6 pt-1'>
            <p className='font-semibold'>Team planner .</p>
            <p className='font-semibold'>project managment .</p>
            <p className='font-semibold'>virtual office .</p>
            <p className='font-semibold'>chat .</p>
            <p className='font-semibold'>documents .</p>
            <p className='font-semibold'>inbox .</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EAFYTComp