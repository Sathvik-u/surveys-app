import React from 'react'
import Navigationbar from './Navigationbar';
import FormDisplay from  './FormDisplay';
import Footer from  './Footer';
import { useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {
  const navigate=useNavigate();
  return (
    <div id='xshow'>
    <Navigationbar/>
    <FormDisplay/>
    <Footer/>
    </div>
  )
}

export default Home