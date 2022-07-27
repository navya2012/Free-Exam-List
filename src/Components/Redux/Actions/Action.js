import axios from "axios"
// import { REGISTRATION_DATA, VERIFICATION_DATA, EXAMS_LIST, LOGIN_DATA, QUESTIONS_LIST, FINISH_EXAM } from "./Action_types"

const baseURL = `http://test.e-prathibha.com/apis`
const API_KEY = "3w99V63pW7tJ7vavGXtCKo8cp"

/* registration data */
export const registrationData = (register_data, navigate) => async (dispatch) => {
     try {
          const reg_data = {
               "email": register_data.email, "name": register_data.name, "phone": register_data.phone, "password": register_data.password, "confirmPassword": register_data.confirmPassword
          }
          const response = await axios.post(`${baseURL}/register`, reg_data)
          console.log(response.data, "action regis response")
          if (response.data.status === 200) {
               navigate("/verify");
               dispatch({
                    type: 'REGISTRATION_DATA', payload: response.data
               })
          }
          return Promise.resolve(response.data)
     } catch (err) {
          return Promise.reject(err);
     }
}


/* verifyication code */
export const VerificationCode = (code) => async (dispatch) => {
     try {
  await axios.post(`${baseURL}/verifyEmail`, { "reg_code": code })
               .then(response => {
                    console.log(response, " code response")
                    dispatch({ type: 'VERIFICATION_DATA', payload: response.data })
               })
     } catch (err) {
          return console.log(err);
     }
}

/* login data */
export const loginData = (email, password, navigate) => async (dispatch) => {
     try {
          const userData = {
               "email": email,
               "password": password
          }
          const response = await axios.post(`${baseURL}/login`, userData)
          console.log(response.data, "action login response")
          if (response.data.status === 200) {
               navigate("/examlist")
               dispatch({
                    type: 'LOGIN_DATA', payload: response.data
               })
          }
          return Promise.resolve(response.data)
     } catch (err) {
          return Promise.reject(err);
     }

}


/* Get exam list */
export const examList = (login_values) => async (dispatch) => {
     try {
      await axios.post(`${baseURL}/test_free_exam`, {}, {
               headers: {
                    id: login_values.id,
                    server_key: API_KEY,
                    tokenu: login_values.token
               }
          })
               .then(response => {
                    console.log(response, "action examslist res")
                    dispatch({ type: 'EXAMS_LIST', payload: response.data })
               })
           
     } catch (err) {
          return console.log(err);
     }
}

/* questions list */
export const questionsList = (examid, login_values, navigator) => async (dispatch) => {
     try {
          const headers = {
               id: login_values.id,
               server_key: API_KEY,
               tokenu: login_values.token
          }

          const response = await axios.get(` ${baseURL}/start_exam?examId=${examid}`, { headers })
          console.log(response.data, "action queslist res")
          if (response.data.status === 200) {
               const resp = response.data
               navigator("/queslist")
               dispatch({
                    type: 'QUESTIONS_LIST', payload: { resp, examid }
               })
          }
          return Promise.resolve(response.data)
     } catch (err) {
          return Promise.reject(err);
     }
}

/* finish exam */
export const finishExam = (login_values, examId, qno) => async (dispatch) => {
     try {
          const headers = {
               id: login_values.id,
               server_key: API_KEY,
               tokenu: login_values.token
          }
      await axios.post(` ${baseURL}/finishExam`, { "examId": examId, "qno": qno }, { headers })
               .then(response => {
                    console.log({ "examId": examId, "qno": qno })
                    console.log(response.data, "finish response")
                    dispatch({ type: 'FINISH_EXAM', payload: response.data })
               })
     } catch (err) {
          return console.log(err, " could not get response");
     }
}
