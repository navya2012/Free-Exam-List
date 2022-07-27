
const initialState = {
    regis_data:{},
    login_data:{},
    verify_code:{},
    exams_data:[],
    ques_data:[],
    examid:"",
    finish_data:{}
}

export const Reducer = (state=initialState, action)  => {
    switch(action.type){
        case 'LOGIN_DATA':
            return{
                ...state,
                login_data: action.payload      
            }
        
            case 'REGISTRATION_DATA' :
                return{
                    ...state,
                    regis_data:action.payload
                }
            
            case 'VERIFICATION_DATA' :
                return{
                    ...state,
                    verify_code:action.payload
                }

            case 'EXAMS_LIST':
                return{
                    ...state,
                    exams_data:action.payload
                } 
            
            case 'QUESTIONS_LIST':
               
                return{
                    ...state,
                    ques_data:action.payload.resp,
                    examid:action.payload.examid            
                } 

            case 'FINISH_EXAM' :

                return{
                    ...state,
                    finish_data:action.payload
                }
                
            default :    
            return state
    }
}