import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Block from './components/Block';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header content={'контент хедера'} a={43} b={2}/>
      <Main content={'content'}/>
      <Block>
        <Main content={'main child'}/>
      </Block>
      <Footer/>
    </div>
  );
}

export default App;
