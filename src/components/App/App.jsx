import React, { useState, Fragment } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "../Home/Home"
import Skills from '../Skills/Skills'
import Navbar from '../Navbar/Navbar'
import Projects from '../Projects/Projects'



export default function App(){
  console.log("hey there")
  return (
    <Fragment> 
      <Navbar/>
      <Home/>
      <Skills/>
    <Projects/>
    </Fragment>


  )

}