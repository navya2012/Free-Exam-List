import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import {ExamList} from './Components/Redux/Containers/ExamList';
import {Login} from './Components/Redux/Containers/Login';
import {Navbar} from './Components/Navbar';
import {QuestionsList} from './Components/Redux/Containers/QuestionsList';
import {Registration} from './Components/Redux/Containers/Registration';
import {Verification} from './Components/Redux/Containers/Verification'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}/>
          <Route path="/regis" element={<Registration />}/>     
          <Route path="/verify" element={<Verification />}/>
          <Route path="/login" element={<Login />}/>
          <Route path='/examlist' element={<ExamList />}/>
          <Route path='/queslist' element={<QuestionsList />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
