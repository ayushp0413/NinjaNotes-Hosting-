import React from 'react'
import image from '../assets/images/papersImage.svg'
import { Tree } from '@geist-ui/core'

const Notes = () => {
  return (

    <div data-aos='fade-down'
          data-aos-duration='1200'  className='w-11/12 max-w-maxContent mx-auto mt-20'>
    
      <h1 className='heading my-10 text-center '>
        Organized pervious years papers by subjects and departments for easy access
      </h1>
      <div className=' text-black flex flex-col-reverse items-center justify-center  mx-auto lg:flex-row-reverse lg:items-center lg:justify-between  mb-14 px-6 md:px-0 z-10'>
        <div
          data-aos='fade-left'
          data-aos-duration='1200'
          className='lg:w-[50%] flex flex-col items-center justify-center p-7 lg:items-start '
        >
          <div className='mx-auto border-2 border-tempPrimary p-4 rounded-lg '>
            <Tree>
              <Tree.Folder name='Mid Sem'>
                <Tree.Folder name='First'>
                  <Tree.Folder name='Computer Science'>
                    <Tree.File name='Machine Learning'></Tree.File>
                    <Tree.File name='Compiler Design'></Tree.File>
                    <Tree.File name='Computer Networks'></Tree.File>
                    <Tree.File name='Project Management'></Tree.File>
                  </Tree.Folder>
                  <Tree.Folder name='AI/DS'>
                    <Tree.File name='Deep Learning'></Tree.File>
                    <Tree.File name='Compiler Design'></Tree.File>
                    <Tree.File name='Computer Networks'></Tree.File>
                    <Tree.File name='Data Mining & Warehousing'></Tree.File>
                  </Tree.Folder>
                  <Tree.Folder name='Information Technology'></Tree.Folder>
                  <Tree.Folder name='Electrical'></Tree.Folder>
                  <Tree.Folder name='Mechanical'></Tree.Folder>
                  <Tree.Folder name='Civil'></Tree.Folder>
                </Tree.Folder>

                <Tree.Folder name='Second'>
                  <Tree.Folder name='Computer Science'>
                    <Tree.File name='Machine Learning'></Tree.File>
                    <Tree.File name='Compiler Design'></Tree.File>
                    <Tree.File name='Computer Networks'></Tree.File>
                    <Tree.File name='Project Management'></Tree.File>
                  </Tree.Folder>
                  <Tree.Folder name='AI/DS'>
                    <Tree.File name='Deep Learning'></Tree.File>
                    <Tree.File name='Compiler Design'></Tree.File>
                    <Tree.File name='Computer Networks'></Tree.File>
                    <Tree.File name='Data Mining & Warehousing'></Tree.File>
                  </Tree.Folder>
                  <Tree.Folder name='Information Technology'></Tree.Folder>
                  <Tree.Folder name='Electrical'></Tree.Folder>
                  <Tree.Folder name='Mechanical'></Tree.Folder>
                  <Tree.Folder name='Civil'></Tree.Folder>
                </Tree.Folder>
              </Tree.Folder>

              <Tree.Folder name='End Sem'>
                <Tree.Folder name='Computer Science'>
                  <Tree.File name='Machine Learning'></Tree.File>
                  <Tree.File name='Compiler Design'></Tree.File>
                  <Tree.File name='Computer Networks'></Tree.File>
                  <Tree.File name='Project Management'></Tree.File>
                </Tree.Folder>
                <Tree.Folder name='AI/DS'>
                  <Tree.File name='Deep Learning'></Tree.File>
                  <Tree.File name='Compiler Design'></Tree.File>
                  <Tree.File name='Computer Networks'></Tree.File>
                  <Tree.File name='Data Mining & Warehousing'></Tree.File>
                </Tree.Folder>
                <Tree.Folder name='Information Technology'></Tree.Folder>
                <Tree.Folder name='Electrical'></Tree.Folder>
                <Tree.Folder name='Mechanical'></Tree.Folder>
                <Tree.Folder name='Civil'></Tree.Folder>
              </Tree.Folder>
            </Tree>
          </div>
        </div>

        <img
          data-aos='fade-right'
          data-aos-duration='1200'
          className='h-[400px] w-[600px] rounded-[30px]'
          src={image}
          alt=''
        />
      </div>
    </div>
  )
}

export default Notes
