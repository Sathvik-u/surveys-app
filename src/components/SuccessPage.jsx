import React from 'react';
import Navigationbar from './Navigationbar';
import ImageSvg from '../success.svg'


function SuccessPage() {
  return (
    <div id='xshow'>
        <Navigationbar/>
        <div className='text-center p-4' id=''><img src={ImageSvg} alt='success' width='250px'/></div>
        <div><p className='text-center display-3 fw-4 text-dark'>submission Successfull!...</p></div>
        <div className='text-white text-center' ><a className='' href='/Responses'>show responses</a></div> 
    </div>
  )
}

export default SuccessPage