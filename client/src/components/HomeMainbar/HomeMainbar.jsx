import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList';
import { useSelector } from 'react-redux';

const HomeMainbar = () => {
   
  const location = useLocation()
  const user = 1;
  const navigate = useNavigate();
   
  const questionsList = useSelector(state => state.questionsReducer)
  // console.log(questionsList);


//  var questionList = [{
//       _id: 1,
//       upVotes : 3,
//       downVotes :2,
//       noOfAnswers :2,
//       questionTitle :"what is a function?",
//       questionBody : "It meant to be",
//       questionTags : ["java","node js", "react js", "mongodb","express js"],
//       userPosted : "shreyas",
//       userId : 1,
//       askedOn : "jan 1",
//       answer : [{
//           answerBody : "Answer",
//           userAnswered : "Rahul",
//           answeredOn : "jan 2",
//           userId :2,
//         }]
//  },{
//       _id: 2,
//       upVotes : 3,
//       downVotes :2,
//       noOfAnswers :0,
//       questionTitle :"what is a function?",
//       questionBody : "It meant to be",
//       questionTags : ["javascript","R", "python"],
//       userPosted : "shreyas",
//       askedOn : "jan 1",
//       userId : 1,
//       answer : [{
//           answerBody : "Answer",
//           userAnswered : "Rahul",
//           answeredOn : "jan 2",
//           userId :2,
//         }]
// },{
//       _id: 3,
//       upVotes : 3,
//       downVotes :2,
//       noOfAnswers :0,
//       questionTitle :"what is a function?",
//       questionBody : "It meant to be",
//       questionTags : ["java","node js", "react js", "mongodb"],
//       userPosted : "shreyas",
//       askedOn : "jan 1",
//       userId : 1,
//       answer : [
//         {
//           answerBody : "Answer",
//           userAnswered : "Rahul",
//           answeredOn : "jan 2",
//           userId :2,
//         }]
// }]

    
     const chechAuth =()=>{
      if(user === null){
        alert("Login or Signup to ask a question")
      navigate('/Auth') 
      }else{
        navigate('/AskQuestion')
      }
     }
    
  return (
    <div className='main-bar'>
        <div className='main-bar-header'>
          {
            location.pathname === '/'? <h1>Top Questions</h1> : <h1>All Questions</h1>
          }
              <button to='/AskQuestion' onClick={chechAuth} className='ask-btn'>Ask Question</button>
        </div>
        <div>
          {
            questionsList.data === null ?
            <h1>Loading...</h1> :
             <>
             <p>{questionsList.data.length} questions</p>
                <QuestionList questionList ={questionsList.data}/>
             </>
          }
        </div>
    </div>
  )
}

export default HomeMainbar;