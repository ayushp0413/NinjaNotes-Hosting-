import React from 'react'
import image from '../assets/images/papersImage.svg'
import { Tree } from '@geist-ui/core'

const Notes = () => {
  return (
    <div
      data-aos='fade-down'
      data-aos-duration='1200'
      className='w-11/12 max-w-maxContent mx-auto mt-20'
    >
      <h1 className='heading my-10 text-center '>
        Organized pervious years papers by subjects and departments for easy
        access
      </h1>
      <div className=' text-black flex flex-col-reverse items-center justify-center  mx-auto lg:flex-row-reverse lg:items-center lg:justify-between  mb-14 px-6 md:px-0 z-10'>
        <div
          data-aos='fade-left'
          data-aos-duration='1200'
          className='lg:w-[50%] flex flex-col items-center justify-center p-7 lg:items-start '
        >
          <div className='mx-auto border-2 border-tempPrimary p-4 rounded-lg '>
            <Tree>
              <Tree.Folder name='Engineering'>
                <Tree.Folder name='End Sem'>
                  {/* ----------------- AIDS --------------- */}
                  <Tree.Folder name='AIDS'>
                    <Tree.Folder name='1st Sem'>
                      <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                      <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                      <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                      <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                      <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='2nd Sem'>
                      <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                      <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                      <Tree.File name='BT-103 English for Communication'></Tree.File>
                      <Tree.File name='BT-104 BEE'></Tree.File>
                      <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                    </Tree.Folder>
                  </Tree.Folder>

                  {/* ----------------- CSE --------------- */}
                  <Tree.Folder name='CSE'>
                    <Tree.Folder name='1st Sem'>
                      <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                      <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                      <Tree.File name='BT-103 English for Communication'></Tree.File>
                      <Tree.File name='BT-104 BEE'></Tree.File>
                      <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='2nd Sem'>
                      <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                      <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                      <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                      <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                      <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                    </Tree.Folder>
                  </Tree.Folder>

                  {/* ----------------- IT --------------- */}
                  <Tree.Folder name='IT'>
                    <Tree.Folder name='1st Sem'>
                      <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                      <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                      <Tree.File name='BT-103 English for Communication'></Tree.File>
                      <Tree.File name='BT-104 BEE'></Tree.File>
                      <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='2nd Sem'>
                      <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                      <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                      <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                      <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                      <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                    </Tree.Folder>
                  </Tree.Folder>

                  {/* ----------------- EE --------------- */}
                  <Tree.Folder name='EE'>
                    <Tree.Folder name='1st Sem'>
                      <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                      <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                      <Tree.File name='BT-103 English for Communication'></Tree.File>
                      <Tree.File name='BT-104 BEE'></Tree.File>
                      <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='2nd Sem'>
                      <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                      <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                      <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                      <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                      <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                    </Tree.Folder>
                  </Tree.Folder>

                  {/* ----------------- EX --------------- */}
                  <Tree.Folder name='EX'>
                    <Tree.Folder name='1st Sem'>
                      <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                      <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                      <Tree.File name='BT-103 English for Communication'></Tree.File>
                      <Tree.File name='BT-104 BEE'></Tree.File>
                      <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='2nd Sem'>
                      <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                      <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                      <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                      <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                      <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                    </Tree.Folder>
                  </Tree.Folder>

                  {/* ----------------- ME --------------- */}
                  <Tree.Folder name='ME'>
                    <Tree.Folder name='1st Sem'>
                      <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                      <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                      <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                      <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                      <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='2nd Sem'>
                      <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                      <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                      <Tree.File name='BT-103 English for Communication'></Tree.File>
                      <Tree.File name='BT-104 BEE'></Tree.File>
                      <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                    </Tree.Folder>
                  </Tree.Folder>

                  {/* ----------------- CIVIL --------------- */}
                  <Tree.Folder name='CIVIL'>
                    <Tree.Folder name='1st Sem'>
                      <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                      <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                      <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                      <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                      <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='2nd Sem'>
                      <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                      <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                      <Tree.File name='BT-103 English for Communication'></Tree.File>
                      <Tree.File name='BT-104 BEE'></Tree.File>
                      <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                    </Tree.Folder>
                  </Tree.Folder>
                </Tree.Folder>

                {/* -------------------MID SEM-------------- */}
                <Tree.Folder name='Mid Sem'>
                  <Tree.Folder name='First'>
                    {/* ----------------- AIDS --------------- */}
                    <Tree.Folder name='AIDS'>
                      <Tree.Folder name='1st Sem'>
                        <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                        <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                        <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                        <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                        <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                      </Tree.Folder>
                      <Tree.Folder name='2nd Sem'>
                        <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                        <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                        <Tree.File name='BT-103 English for Communication'></Tree.File>
                        <Tree.File name='BT-104 BEE'></Tree.File>
                        <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                      </Tree.Folder>
                    </Tree.Folder>

                    {/* ----------------- CSE --------------- */}
                    <Tree.Folder name='CSE'>
                      <Tree.Folder name='1st Sem'>
                        <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                        <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                        <Tree.File name='BT-103 English for Communication'></Tree.File>
                        <Tree.File name='BT-104 BEE'></Tree.File>
                        <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                      </Tree.Folder>
                      <Tree.Folder name='2nd Sem'>
                        <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                        <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                        <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                        <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                        <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                      </Tree.Folder>
                    </Tree.Folder>

                    {/* ----------------- IT --------------- */}
                    <Tree.Folder name='IT'>
                      <Tree.Folder name='1st Sem'>
                        <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                        <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                        <Tree.File name='BT-103 English for Communication'></Tree.File>
                        <Tree.File name='BT-104 BEE'></Tree.File>
                        <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                      </Tree.Folder>
                      <Tree.Folder name='2nd Sem'>
                        <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                        <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                        <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                        <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                        <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                      </Tree.Folder>
                    </Tree.Folder>

                    {/* ----------------- EE --------------- */}
                    <Tree.Folder name='EE'>
                      <Tree.Folder name='1st Sem'>
                        <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                        <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                        <Tree.File name='BT-103 English for Communication'></Tree.File>
                        <Tree.File name='BT-104 BEE'></Tree.File>
                        <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                      </Tree.Folder>
                      <Tree.Folder name='2nd Sem'>
                        <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                        <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                        <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                        <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                        <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                      </Tree.Folder>
                    </Tree.Folder>

                    {/* ----------------- EX --------------- */}
                    <Tree.Folder name='EX'>
                      <Tree.Folder name='1st Sem'>
                        <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                        <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                        <Tree.File name='BT-103 English for Communication'></Tree.File>
                        <Tree.File name='BT-104 BEE'></Tree.File>
                        <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                      </Tree.Folder>
                      <Tree.Folder name='2nd Sem'>
                        <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                        <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                        <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                        <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                        <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                      </Tree.Folder>
                    </Tree.Folder>

                    {/* ----------------- ME --------------- */}
                    <Tree.Folder name='ME'>
                      <Tree.Folder name='1st Sem'>
                        <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                        <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                        <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                        <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                        <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                      </Tree.Folder>
                      <Tree.Folder name='2nd Sem'>
                        <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                        <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                        <Tree.File name='BT-103 English for Communication'></Tree.File>
                        <Tree.File name='BT-104 BEE'></Tree.File>
                        <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                      </Tree.Folder>
                    </Tree.Folder>

                    {/* ----------------- CIVIL --------------- */}
                    <Tree.Folder name='CIVIL'>
                      <Tree.Folder name='1st Sem'>
                        <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                        <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                        <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                        <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                        <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                      </Tree.Folder>
                      <Tree.Folder name='2nd Sem'>
                        <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                        <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                        <Tree.File name='BT-103 English for Communication'></Tree.File>
                        <Tree.File name='BT-104 BEE'></Tree.File>
                        <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                      </Tree.Folder>
                    </Tree.Folder>
                  </Tree.Folder>
                  <Tree.Folder name='Second'>
                    {/* ----------------- AIDS --------------- */}
                    <Tree.Folder name='AIDS'>
                      <Tree.Folder name='1st Sem'>
                        <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                        <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                        <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                        <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                        <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                      </Tree.Folder>
                      <Tree.Folder name='2nd Sem'>
                        <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                        <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                        <Tree.File name='BT-103 English for Communication'></Tree.File>
                        <Tree.File name='BT-104 BEE'></Tree.File>
                        <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                      </Tree.Folder>
                    </Tree.Folder>

                    {/* ----------------- CSE --------------- */}
                    <Tree.Folder name='CSE'>
                      <Tree.Folder name='1st Sem'>
                        <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                        <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                        <Tree.File name='BT-103 English for Communication'></Tree.File>
                        <Tree.File name='BT-104 BEE'></Tree.File>
                        <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                      </Tree.Folder>
                      <Tree.Folder name='2nd Sem'>
                        <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                        <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                        <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                        <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                        <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                      </Tree.Folder>
                    </Tree.Folder>

                    {/* ----------------- IT --------------- */}
                    <Tree.Folder name='IT'>
                      <Tree.Folder name='1st Sem'>
                        <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                        <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                        <Tree.File name='BT-103 English for Communication'></Tree.File>
                        <Tree.File name='BT-104 BEE'></Tree.File>
                        <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                      </Tree.Folder>
                      <Tree.Folder name='2nd Sem'>
                        <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                        <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                        <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                        <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                        <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                      </Tree.Folder>
                    </Tree.Folder>

                    {/* ----------------- EE --------------- */}
                    <Tree.Folder name='EE'>
                      <Tree.Folder name='1st Sem'>
                        <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                        <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                        <Tree.File name='BT-103 English for Communication'></Tree.File>
                        <Tree.File name='BT-104 BEE'></Tree.File>
                        <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                      </Tree.Folder>
                      <Tree.Folder name='2nd Sem'>
                        <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                        <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                        <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                        <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                        <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                      </Tree.Folder>
                    </Tree.Folder>

                    {/* ----------------- EX --------------- */}
                    <Tree.Folder name='EX'>
                      <Tree.Folder name='1st Sem'>
                        <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                        <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                        <Tree.File name='BT-103 English for Communication'></Tree.File>
                        <Tree.File name='BT-104 BEE'></Tree.File>
                        <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                      </Tree.Folder>
                      <Tree.Folder name='2nd Sem'>
                        <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                        <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                        <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                        <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                        <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                      </Tree.Folder>
                    </Tree.Folder>

                    {/* ----------------- ME --------------- */}
                    <Tree.Folder name='ME'>
                      <Tree.Folder name='1st Sem'>
                        <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                        <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                        <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                        <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                        <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                      </Tree.Folder>
                      <Tree.Folder name='2nd Sem'>
                        <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                        <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                        <Tree.File name='BT-103 English for Communication'></Tree.File>
                        <Tree.File name='BT-104 BEE'></Tree.File>
                        <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                      </Tree.Folder>
                    </Tree.Folder>

                    {/* ----------------- CIVIL --------------- */}
                    <Tree.Folder name='CIVIL'>
                      <Tree.Folder name='1st Sem'>
                        <Tree.File name='BT-201 Engineering Physics'></Tree.File>
                        <Tree.File name='BT-202 Mathematics-II'></Tree.File>
                        <Tree.File name='BT-203 Basic Mechanical Engineering'></Tree.File>
                        <Tree.File name='BT-204 Basic Civil Engineering & Mechanics'></Tree.File>
                        <Tree.File name='BT-205 Basic Computer Engineering'></Tree.File>
                      </Tree.Folder>
                      <Tree.Folder name='2nd Sem'>
                        <Tree.File name='BT-101 Engineering Chemistry'></Tree.File>
                        <Tree.File name='BT-102 Mathematics-I'></Tree.File>
                        <Tree.File name='BT-103 English for Communication'></Tree.File>
                        <Tree.File name='BT-104 BEE'></Tree.File>
                        <Tree.File name='BT-105 Engineering Graphics'></Tree.File>
                      </Tree.Folder>
                    </Tree.Folder>
                  </Tree.Folder>
                </Tree.Folder>
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
