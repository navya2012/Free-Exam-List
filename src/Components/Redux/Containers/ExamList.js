import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { examList, questionsList } from '../Actions/Action'
import { useNavigate } from "react-router-dom"
import  "./Css_Modules/ExamList.css"

export const ExamList = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()

  const login_response = useSelector((state) => state.login_data)
  const examsList_data = useSelector((state) => state.exams_data)

  const login_values = {
    id: login_response.data.Id,
    token: login_response.data.Token
  }

  useEffect(() => {
    dispatch(examList(login_values))
  }, [])

  /* handle id */
  const handleid = (examid) => {            
    alert(" Display Question Paper")
    dispatch(questionsList(examid, login_values, navigator))
  }

  return (
    <>
      <div className='App container'>
        <h1 className='head-ht' >EXAMS LIST</h1>
        <h1 className='head-ht'>UPSC Civils Prelims Previous Years Papers</h1>
        <h1 className='second'>Limited UPSC other than Civils</h1>
        <h1 className='third'>Limited NCERT</h1>
        {
          examsList_data.data.exams && examsList_data.data.exams.map((items, i) => {
            return (
              <div key={i} >
                <main className='grid-container' >
                  {
                    items["Old question papers UPSC Civils (Pre)"] && items["Old question papers UPSC Civils (Pre)"].map((subitems, k) => {
                      return (
                        <>
                          <div key={k} className='grid-border' onClick={() => handleid(subitems.Exam.id)}>
                            <h4>Exam_id: {subitems.Exam.id}</h4>
                            <h5>Exam_year: {subitems.Exam.name}</h5>
                            <h6>Exam_Start_date: {subitems.Exam.start_date}</h6>
                          </div>
                        </>
                      )
                    })}
                </main>
                <main className='grid'>
                  {
                    items["Limited UPSC other than Civils"] && items["Limited UPSC other than Civils"].map((subitems, j) => {
                      return (
                        <>
                          <div key={j} className='grid-borders' onClick={() => handleid(subitems.Exam.id)} >
                            <h4>Exam_id: {subitems.Exam.id}</h4>
                            <h5>Exam_year: {subitems.Exam.name}</h5>
                            <h6>Exam_Start_date: {subitems.Exam.start_date}</h6>
                          </div>
                        </>
                      )
                    })}

                  {
                    items["Limited NCERT"] && items["Limited NCERT"].map((subitems, l) => {
                      return (
                        <>
                          <div key={l} className='grid-borders' onClick={() => handleid(subitems.Exam.id)} >
                            <h4>Exam_id: {subitems.Exam.id}</h4>
                            <h5>Exam_year: {subitems.Exam.name}</h5>
                            <h6>Exam_Start_date: {subitems.Exam.start_date}</h6>
                          </div>
                        </>
                      )
                    })}
                </main>

              </div>
            )
          })
        }
      </div>
    </>
  )
}



