import React from 'react'
import notesImage from '../assets/images/notesImage.svg'
import { Tree } from '@geist-ui/core'
import { useNavigate } from 'react-router'

const Notes = () => {

  const navigate = useNavigate();

  const handler = path => {
    console.log("PATH: ", path);
    let url = path.split(" ").join("-")
    navigate(url);
  }


  return (
    <div  data-aos='fade-down'
          data-aos-duration='1200' className='w-11/12 max-w-maxContent mx-auto mt-20'>
      <h1 className='heading my-10 text-center '>
        Organized university notes by subjects and departments for easy access
      </h1>
      <div className=' text-black flex flex-col-reverse items-center justify-center  mx-auto lg:flex-row lg:items-center lg:justify-between  mb-14 px-6 md:px-0 z-10'>
        <div
          className='lg:w-[50%] flex flex-col items-center justify-center p-7 lg:items-start '
        >
          <div className='flex flex-col gap-4 '>
            {/* Engineering */}
            <div className='mx-auto border-2 border-tempPrimary p-4 rounded-lg '>
              <Tree onClick={handler}>
              <Tree.Folder name='Engineering'>
                  <Tree.Folder name='CSE'>
                  <Tree.Folder name='1st Sem'>
                    <Tree.Folder name='BT-101 Engineering Chemistry'>
                    <Tree.File name='Unit 1'></Tree.File>
                    <Tree.File name='Unit 2'></Tree.File>
                    <Tree.File name='Unit 3'></Tree.File>
                    <Tree.File name='Unit 4'></Tree.File>
                    <Tree.File name='Unit 5'></Tree.File>
                    <Tree.File name='Unit 1-5 Package'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='BT-102 Mathematics-I'>
                    <Tree.File name='Unit 1'></Tree.File>
                    <Tree.File name='Unit 2'></Tree.File>
                    <Tree.File name='Unit 3'></Tree.File>
                    <Tree.File name='Unit 4'></Tree.File>
                    <Tree.File name='Unit 5'></Tree.File>
                    <Tree.File name='Unit 1-5 Package'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='BT-103 English for Communication'>
                    <Tree.File name='Unit 1'></Tree.File>
                    <Tree.File name='Unit 2'></Tree.File>
                    <Tree.File name='Unit 3'></Tree.File>
                    <Tree.File name='Unit 4'></Tree.File>
                    <Tree.File name='Unit 5'></Tree.File>
                    <Tree.File name='Unit 1-5 Package'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='BT-104 BEE'>
                    <Tree.File name='Unit 1'></Tree.File>
                    <Tree.File name='Unit 2'></Tree.File>
                    <Tree.File name='Unit 3'></Tree.File>
                    <Tree.File name='Unit 4'></Tree.File>
                    <Tree.File name='Unit 5'></Tree.File>
                    <Tree.File name='Unit 1-5 Package'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='BT-105 Engineering Graphics'>
                    <Tree.File name='Unit 1'></Tree.File>
                    <Tree.File name='Unit 2'></Tree.File>
                    <Tree.File name='Unit 3'></Tree.File>
                    <Tree.File name='Unit 4'></Tree.File>
                    <Tree.File name='Unit 5'></Tree.File>
                    <Tree.File name='Unit 1-5 Package'></Tree.File>
                    </Tree.Folder>
                  </Tree.Folder>
                  <Tree.Folder name='2nd Sem'>
                    <Tree.Folder name='BT-201 Engineering Physics'>
                    <Tree.File name='Unit 1'></Tree.File>
                    <Tree.File name='Unit 2'></Tree.File>
                    <Tree.File name='Unit 3'></Tree.File>
                    <Tree.File name='Unit 4'></Tree.File>
                    <Tree.File name='Unit 5'></Tree.File>
                    <Tree.File name='Unit 1-5 Package'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='BT-202 Mathematics-II'>
                    <Tree.File name='Unit 1'></Tree.File>
                    <Tree.File name='Unit 2'></Tree.File>
                    <Tree.File name='Unit 3'></Tree.File>
                    <Tree.File name='Unit 4'></Tree.File>
                    <Tree.File name='Unit 5'></Tree.File>
                    <Tree.File name='Unit 1-5 Package'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='BT-203 Basic Mechanical Engineering'>
                    <Tree.File name='Unit 1'></Tree.File>
                    <Tree.File name='Unit 2'></Tree.File>
                    <Tree.File name='Unit 3'></Tree.File>
                    <Tree.File name='Unit 4'></Tree.File>
                    <Tree.File name='Unit 5'></Tree.File>
                    <Tree.File name='Unit 1-5 Package'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='BT-204 Basic Civil Engineering & Mechanics'>
                    <Tree.File name='Unit 1'></Tree.File>
                    <Tree.File name='Unit 2'></Tree.File>
                    <Tree.File name='Unit 3'></Tree.File>
                    <Tree.File name='Unit 4'></Tree.File>
                    <Tree.File name='Unit 5'></Tree.File>
                    <Tree.File name='Unit 1-5 Package'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='BT-205 Basic Computer Engineering'>
                    <Tree.File name='Unit 1'></Tree.File>
                    <Tree.File name='Unit 2'></Tree.File>
                    <Tree.File name='Unit 3'></Tree.File>
                    <Tree.File name='Unit 4'></Tree.File>
                    <Tree.File name='Unit 5'></Tree.File>
                    <Tree.File name='Unit 1-5 Package'></Tree.File>
                    </Tree.Folder>
                  </Tree.Folder>
                  </Tree.Folder>
                  <Tree.Folder name='IT'>
                  <Tree.Folder name='1 Sem'>

                  </Tree.Folder>
                  <Tree.Folder name='2nd Sem'></Tree.Folder>
                  <Tree.Folder name='3rd Sem'></Tree.Folder>
                  </Tree.Folder>
                  <Tree.Folder name='AIDS'>
                  <Tree.Folder name='1 Sem'></Tree.Folder>
                  <Tree.Folder name='2nd Sem'></Tree.Folder>
                  <Tree.Folder name='3rd Sem'></Tree.Folder>
                  </Tree.Folder>
                  <Tree.Folder name='CIVIL'></Tree.Folder>
                  <Tree.Folder name='EX'></Tree.Folder>
                  <Tree.Folder name='EC'></Tree.Folder>
                  <Tree.Folder name='ME'></Tree.Folder>
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
          className='h-[400px] w-[600px] rounded-[30px]'
          src={notesImage}
          alt=''
        />
      </div>
    </div>
  )
}

export default Notes
