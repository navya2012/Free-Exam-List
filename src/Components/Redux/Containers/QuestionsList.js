import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { finishExam } from "../Actions/Action";

export const QuestionsList = () => {
    const dispatch = useDispatch()

    const queslist_data = useSelector((state) => state.ques_data)
    const examId = useSelector((state) => state.examid)
    const finish_data = useSelector((state) => state.finish_data)
    const login_response = useSelector((state) => state.login_data)

    /* handle id */
    const handleSubmit = (login_values, qno) => {
        login_values = {
            id: login_response.data.Id,
            token: login_response.data.Token
        };
        qno = "100";
        alert(finish_data.data)
        dispatch(finishExam(login_values, examId, qno))
       
    }

    return (
        <>
            <div className="container">
                <h1 className="head-side"> Question Papers</h1>
                {
                    queslist_data.data.exam && queslist_data.data.exam.map((items, i) => {
                        return (
                            <>
                                <div key={i} className='container'>
                                    <div>
                                        <div><h6>{items.ExamStat.ques_no}.</h6>{items.Question.question.above}</div>
                                        <p><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /> {items.Question.option1}</p>
                                        <p><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /> {items.Question.option1}</p>
                                        <p><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /> {items.Question.option1}</p>
                                        <p><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /> {items.Question.option1}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                <button onClick={handleSubmit} className="btn btn-success btn-space">Submit</button>
            </div>
        </>
    )
}
