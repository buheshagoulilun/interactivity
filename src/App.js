import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <button class="button button1" onClick={sayHello}>First Button</button>
     <button class="button button2" onClick={sayHelloo}>Second Button</button>
     <button class="button button2" onClick={sayHellooo}>Third Button</button>
     </div>
  )
}
function sayHello() {
  alert('You have selected: First Button');
}
function sayHelloo() {
  alert('You have selected: Second Button');
}
function sayHellooo() {
  alert('You have selected: Third Button');
}


export default App;
