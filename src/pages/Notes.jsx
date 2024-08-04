import React from 'react'
import notesImage from '../assets/images/notesImage.svg'
import { Tree } from '@geist-ui/core'

const Notes = () => {
  return (
    <div className='w-11/12 max-w-maxContent mx-auto'>
      <h1 className='heading my-10 text-center '>
        Organized university notes by subjects and departments for easy access
      </h1>
      <div className=' text-black flex flex-col-reverse items-center justify-center  mx-auto lg:flex-row lg:items-center lg:justify-between  mb-14 px-6 md:px-0 z-10'>
        <div
          data-aos='fade-left'
          data-aos-duration='1200'
          className='lg:w-[50%] flex flex-col items-center justify-center p-7 lg:items-start '
        >
          <div className='flex flex-col gap-4 '>
            {/* Engineering */}
            <div className='mx-auto border-2 border-tempPrimary p-4 rounded-lg '>
              <Tree>
                <Tree.Folder name='Engineering'>
                  <Tree.Folder name='1st Year (Common)'>
                    <Tree.File name='Engineering Chemistry'></Tree.File>
                    <Tree.File name='English for Communication'></Tree.File>
                    <Tree.File name='BEEE'></Tree.File>
                    <Tree.File name='Mathematics 1'></Tree.File>
                    <Tree.File name='Engineering Physics'></Tree.File>
                    <Tree.File name='Mathematics 2'></Tree.File>
                    <Tree.File name='Basic Mechanical Eng.'></Tree.File>
                    <Tree.File name='Basic Civil Eng.'></Tree.File>
                    <Tree.File name='Basic Computer Eng.'></Tree.File>
                    <Tree.File name='Langauge Lab'></Tree.File>
                  </Tree.Folder>

                  <Tree.Folder name='2nd Sem'></Tree.Folder>
                  <Tree.Folder name='3rd Sem'></Tree.Folder>
                  <Tree.Folder name='4th Sem'></Tree.Folder>
                  <Tree.Folder name='5th Sem'></Tree.Folder>
                  <Tree.Folder name='6th Sem'></Tree.Folder>
                </Tree.Folder>
              </Tree>
            </div>

            {/* Pharmacy */}
            <div className='mx-auto border-2 border-tempPrimary p-4 rounded-lg '>
              <Tree>
                <Tree.Folder name='B-Pharmacy'>
                  <Tree.Folder name='1st Sem'>
                    <Tree.File name='HAAP'></Tree.File>
                    <Tree.File name='Pharmaceutical Analysis'></Tree.File>
                    <Tree.File name='Pharmaceutics 1'></Tree.File>
                    <Tree.File name='Inorgranic Chemistry'></Tree.File>
                  </Tree.Folder>

                  <Tree.Folder name='2nd Sem'>

                    <Tree.File name='HAAP'></Tree.File>
                    <Tree.File name='Patho Physiology'></Tree.File>
                    <Tree.File name='Bio Chemistry'></Tree.File>
                    <Tree.File name='Organic Chemistry'></Tree.File>
                  </Tree.Folder>
                  <Tree.Folder name='3rd Sem'></Tree.Folder>
                  <Tree.Folder name='4th Sem'></Tree.Folder>
                  <Tree.Folder name='5th Sem'></Tree.Folder>
                  <Tree.Folder name='6th Sem'></Tree.Folder>
                </Tree.Folder>
              </Tree>
            </div>
          </div>
        </div>

        <img
          data-aos='fade-right'
          data-aos-duration='1200'
          className='h-[400px] w-[600px] rounded-[30px]'
          src={notesImage}
          alt=''
        />
      </div>
    </div>
  )
}

export default Notes
