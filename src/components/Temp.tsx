import React from 'react'

import {BorderBeam} from '../components/magicui/BorderBeam'

type Props = {}

const Temp = (props: Props) => {
  return (
    <div className='w-[400px] h-[600px] mx-auto mt-20 '>
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-pink-200 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Border Beam
      </span>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
    </div>
  )
}

export default Temp