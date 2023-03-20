import React from 'react';
import './Landing.sass';
import Header from "../../components/Header"
import Introduction from "./components/Introduction"
import List from "./components/List"
import  Conclusion from './components/Conclusion'
import Footer from '../../components/Footer'

export default function Index() {
  return (
    <div>
      <div> <Header/> </div>
      <div> <Introduction/> </div>
      <div> <List/> </div>
      <div> <Conclusion/> </div>
      <div> <Footer/> </div>
    </div>
  );
}

