import { useState } from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Donate from './components/donate/Donate'
import Register from './components/register/Register'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
        <BrowserRouter>
        	<Navbar />
        		<Routes>
        			<Route path='/' element={< Home/>}></Route>
        			<Route path='/about' element={<About />}></Route>
        			<Route path='/contact' element={<Contact />}></Route>
        			<Route path='/donate' element={<Donate />}></Route>
                    <Route path='/register' element={<Register />}></Route>
        		</Routes>
            <Footer />
    	</BrowserRouter>
    </>
  )
}

export default App
