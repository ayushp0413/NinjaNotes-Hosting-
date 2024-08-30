import React, { useState, useEffect } from 'react'
import notesImage from '../assets/images/notesImage.svg'
import { Tree } from '@geist-ui/core'
import { useNavigate } from 'react-router'
import Footer from '../components/common/Footer'
import NotesCard from '../components/common/NotesCard'
import toast from 'react-hot-toast'
import { getAllSpecialNotes } from '../services/operations/getNotesForSubjects'
import HighlightText from '../components/common/HighlightText'
import Banner from '../components/common/Banner'

const Notes = () => {
  const navigate = useNavigate()
  const [specialNotes, setSpecialNotes] = useState([])

  const handler = path => {
    let url = path.split(' ').join('-')
    navigate(url)
  }

  const getSpecialNotes = async () => {
    try {
      const result = await getAllSpecialNotes()
      if (!result) {
        toast.error('Unable to fetch notes')
      }
      setSpecialNotes(result)
    } catch (err) {
      console.log('Error in fetching Special Notes')
      toast.error('Unable to fetch notes')
    }
  }

  const [active, setActive] = useState(true);

  useEffect(() => {
    getSpecialNotes()
  }, [])

  return (
    <div className='mt-12'>
      {
        active ? <Banner setActive={setActive} /> : ("")
      }
      <div className='w-11/12 max-w-maxContent mx-auto mt-20'>
        <h1
          data-aos='fade-down'
          data-aos-duration='1200'
          className='heading my-10 text-center '
        >
          Organized university notes by subjects and departments for easy access
        </h1>
        <div className=' text-black flex flex-col-reverse items-center justify-center  mx-auto lg:flex-row lg:items-center lg:justify-between  mb-14 px-6 md:px-0 z-10'>
          <div
            data-aos='fade-right'
            data-aos-duration='1200'
            className='lg:w-[50%] flex flex-col items-center justify-center p-7 lg:items-start '
          >
            <div className='flex flex-col gap-4 '>
              {/* Engineering */}
              <div className='mx-auto border-2 border-tempPrimary p-4 rounded-lg '>
                <Tree onClick={handler}>
                  <Tree.Folder name='Engineering'>

                    {/* Branch CSE */}
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

                    {/* Branch IT */}
                    <Tree.Folder name='IT'>
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

                    {/* Branch AIDS */}
                    <Tree.Folder name='AIDS'>
                      <Tree.Folder name='1st Sem'>
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

                      <Tree.Folder name='2nd Sem'>
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
                    </Tree.Folder>

                    {/* Branch CIVIL */}
                    <Tree.Folder name='CIVIL'>
                      <Tree.Folder name='1st Sem'>
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

                      <Tree.Folder name='2nd Sem'>
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
                    </Tree.Folder>

                    {/* Branch EX */}
                    <Tree.Folder name='EX'>
                      <Tree.Folder name='1st Sem'>
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

                      <Tree.Folder name='2nd Sem'>
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
                    </Tree.Folder>

                    {/* Branch Ec */}
                    <Tree.Folder name='EC'>
                      <Tree.Folder name='1st Sem'>
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

                      <Tree.Folder name='2nd Sem'>
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
                    </Tree.Folder>

                    {/* Branch Mechanical */}
                    <Tree.Folder name='ME'>
                      <Tree.Folder name='1st Sem'>
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

                      <Tree.Folder name='2nd Sem'>
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
                    </Tree.Folder>
                  </Tree.Folder>
                </Tree>
              </div>

              {/* Pharmacy */}
              <div className='mx-auto border-2 min-w-[475.025px] border-tempPrimary p-4 rounded-lg '>
                <Tree>
                  <Tree.Folder name='B-Pharmacy'>
                    <Tree.Folder name='1st Sem'>
                      <Tree.File name='BP-101T HAAP-1'></Tree.File>
                      <Tree.File name='BP-102T Pharmaceutical Analysis'></Tree.File>
                      <Tree.File name='BP-103T Pharmaceutics-1'></Tree.File>
                      <Tree.File name='BP-104T Inorgranic Chemistry'></Tree.File>
                    </Tree.Folder>

                    <Tree.Folder name='2nd Sem'>
                      <Tree.File name='BP-201T HAAP-2'></Tree.File>
                      <Tree.File name='BP-202T Organic Chemistry'></Tree.File>
                      <Tree.File name='BP-203T Bio Chemistry'></Tree.File>
                      <Tree.File name='BP-204T Patho Physiology'></Tree.File>
                    </Tree.Folder>
                    <Tree.Folder name='3rd Sem' extra='Coming Soon'></Tree.Folder>
                  </Tree.Folder>
                </Tree>
              </div>
            </div>
          </div>

          <img
            data-aos='fade-left'
            data-aos-duration='1200'
            className='h-[400px] w-[600px] rounded-[30px]'
            src={notesImage}
            alt=''
          />
        </div>
      </div>

      {/* ------------------------- NEW CHANGES ------------------------- */}

      <div className='w-11/12 max-w-maxContent mx-auto p-8'>
        <h3 className='heading text-center'>
          Checkout our <HighlightText text={' Special '} /> notes curated for{' '}
          <HighlightText text={' Placement '} /> Prepration
        </h3>
        {/* <p className='para text-center max-w-[1000px] mx-auto -mt-1'>Explore our specially curated notes designed to give you an edge in placement preparation. These resources are tailored to help you master key concepts, and tackle interview questions.</p> */}
        <div className=' flex flex-row flex-wrap justify-center items-center gap-x-12 gap-y-12 w-full mt-10'>
          {specialNotes?.map((notes, index) => (
            <div key={index}>
              <NotesCard notes={notes} />
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------- NEW CHANGES ------------------------- */}
      <Footer />
    </div>
  )
}

export default Notes
