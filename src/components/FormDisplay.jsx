import React from 'react'
import { useEffect,useState } from 'react'
import {useForm} from 'react-hook-form'
import './formDisplay.css'
import {useNavigate} from 'react-router-dom'

//main function
function FormDisplay() {
  let [question,setQuestions]=useState({})
  let [x,setx]=useState(90)
  let {register,handleSubmit,formState:{errors}}=useForm();
  let [formData,setData]=useState({});
  const navigate = useNavigate();

//navigate through questions
  function nextBtn(x){
    if (x<100){
      setx(x+1)
  }}
  function prevBtn(x){
    if (x>90){
      setx(x-1);
  }}

  //goto submit page
  function Gotox(n){
    setx(n)
  }


//First radio hide button on click
function hideMe(){
  let butt=document.getElementById('JustFirstRadio');
  butt.className='d-none'
  
}





//get data
  useEffect(()=>{
  let url='http://localhost:4000/questions/'+x;
  fetch(url)
    .then(res=>res.json())
    .then(questions=>setQuestions(questions))
    .catch(err=>{console.log(err)})
  },[x])


// deciding question types and display forms  
let formDp=<h3>Loading...</h3>

if (question.question_type===1){
    function Login(data){
      console.log(data)
      setData(data)
    }
    let str=question.ApiField;
    //required 
    let reqObj=false;
    //form
    formDp=<form onSubmit={handleSubmit(Login)}><div>
      {question.choices.map((obj)=><div>
        <input type='radio' id={obj.id} name={question.question_text} value={obj.choice_text} {...register(str)} key={question.choices.id}/>
        <label htmlFor={obj.id}>{obj.choice_text}</label>
        </div>
      )}<div>


      </div>
    </div>
    
    <div><button className='btn btn-primary m-3' type='submit' onClick={()=>nextBtn(x)}>submit and next</button></div>
    </form>

  }
  //type 2
  
else if(question.question_type===2){
     function Login(data){
      console.log(data)
      setData(data)
    }
     let str=question.question_text;
     //form
    formDp=<form onSubmit={handleSubmit(Login)}><div>
        <select className='dropdown' key={question.question_text} {...register(str)} >
      {question.choices.map((obj)=>
    <option htmlFor={obj.id} value={obj.choice_text} key={question.choices.id}>{obj.choice_text}</option>
       )}
      </select>
     
    </div>
    <div><button className='btn btn-primary m-3' type='submit' onClick={()=>nextBtn(x)}>submit and next</button></div>
    </form>

//type 3
  }else if(question.question_type===3){

     function Login(data){
      console.log(data)
      setData(data)
    }
     let str=question.question_text;
    formDp=<form onSubmit={handleSubmit(Login)}>
      {question.choices.map((obj)=><div>
        <input type='checkbox' name={obj.id} id={obj.id} value={obj.choice_text} key={question.choices.id} {...register(str)} />
        <label htmlFor={obj.id} key={question.choices.id}>{obj.choice_text}</label>
        {console.log(obj)}
      </div>)}<div>
      
    </div>
    <div><button className='btn btn-primary m-3' type='submit' onClick={()=>nextBtn(x)}>submit and next</button></div>
    </form>

  }
//type 4  
else if(question.question_type===4){
 function Login(data){
      console.log(data)
      setData(data)
    }
    let str=question.question_text;
    formDp=<form onSubmit={handleSubmit(Login)}><div className='d-flex justify-content-center'>
      <input type='text' id={question.id} className='form-control w-75' placeholder={question.question_text} {...register(str,{required:true})} key={question.question_text}/>
    </div>
    {errors.str?.type=='required' &&<p>this field is required</p>}
    <div><button className='btn btn-primary m-3' type='submit' onClick={()=>nextBtn(x)}>submit and next</button></div>
    </form>
  console.log(errors)

  }

  //type 5
else if(question.question_type===5){

     function Login(data){
      console.log(data)
      setData(data)
    }
     let str=question.question_text;
    formDp=<form onSubmit={handleSubmit(Login)}><div>
      <input type='file' {...register(str)} key={question.question_text}/>
    </div>
    <div><button className='btn btn-primary m-3' type='submit' onClick={()=>nextBtn(x)}>submit and next</button></div>
    </form>
  }


//submitting code  
  else if (question.question_type==='submit'){

    formDp=<div>
      <p className='display-4 text-warning'>Do you want to submit the form ?</p>
      <button className='btn btn-secondary' onClick={()=>{pushData(formData);navigate("./Success")}}>Submit Form</button>
    </div>
  }
function pushData(datt){
// upload data

  fetch(' http://localhost:4000/responses',{
    method: "POST",
    body: JSON.stringify(datt),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
  .then(res=>res.json())
  .then(data=>console.log(data))
  .catch(err=>console.log('error is ',err))
}




  return (
    <div className='container text-center mt-5 ' id="bom">
    {console.log(question)}
      <div className='p-3'>
      <h3>{question.question_text}</h3>
      {formDp}

  <div className='pt-5 d-flex justify-content-between'>
  <button className='btn btn-warning ' onClick={()=>{prevBtn(x)}} type='submit' >{'<'}</button>
  <button className='btn btn-success ' onClick={()=>{nextBtn(x)}} type='submit' >{'>'}</button>
</div>
    {formData.YourGender==='Male' && <button id="JustFirstRadio" onClick={()=>{Gotox(100);hideMe()}} className='btn btn-info'>Skip and Submit</button>}
      </div>
    </div>
  )
}

export default FormDisplay;