import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React, { useState } from 'react'
import './Responses.css'

function Responses(props) {
  let [details,setDetails]=useState([])
useState(()=>
  fetch(' http://localhost:4000/responses')
  .then(res=>res.json())
  .then(data=>setDetails(data))
  .catch(err=>{console.log('error is',err)})
  ,[])
  return (
    <div className='box' id='xsho'>
      
      <h4 className='text-center text-white display-3'>Responses</h4>
    <div className='container' id='box'> {
      details.map((obj)=>
      <table className='table text-white' id='' key={obj.id}>
        <thead className='d-flex justify-content-center'>
          <tr className=' display-4 fw-3'>Details of response {obj.id}</tr>
          </thead>

          <tbody id='tab'>
            <tr>
              <td id='tab'>Email</td>
              <td id='tab'>{obj['Your Email ?']}</td>
              </tr>

              <tr>
              <td id='tab'>Age</td>
              <td id='tab'>{obj['Your Age ?']}</td>
              </tr>

              <tr>
              <td id='tab'>Gender
              </td>
              <td id='tab'>{obj['YourGender']}</td>
              </tr>

              <tr>
              <td id='tab'>prefered job location
              </td>
              <td id='tab'>{obj['Your prefered job location ?']}</td>
              </tr>

              <tr>
              <td id='tab'>Salary Expetation
              </td>
              <td id='tab'>{obj['Your Salary Expectation (CTC in rupees)?']}</td>
              </tr>

              <tr>
              <td id='tab'>Educational Qualification
              </td>
              <td id='tab'>{obj['Your Educational Qualification ?']}</td>
              </tr>

              <tr>
              <td id='tab'>Skills
              </td>
              <td  className='d-flex'>{obj['Your skills'].map((obj)=><p>{obj} , </p>)}</td>
              </tr>
              
              <tr>
              <td id='tab'>Extra Activities
              </td>
              <td className='d-flex'>{obj['Your Extra Activities'].map((obj)=><p>{obj}, </p>)}</td>
              </tr>

              <tr>
              <td id='tab'>Photo
              </td>
              <td id='tab'>Submitted</td>
              </tr>

              <tr>
              <td id='tab'>Resume
              </td>
              <td id='tab'>Submitted</td>
              </tr>

        </tbody>
        </table>)
}</div>
      </div>
  )
}

export default Responses