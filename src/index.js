
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
class College extends React.Component{
  render()
    {
    return <h1> Shridevi College of Engineering </h1>
  }
}
const root1=ReactDOM.createRoot(document.getElementById('root'))
root1.render(<college/>)

function DEPARTMENT(){
  return(<div>
    <College/>
    <h2> ECE DEPARTMENT</h2>
    </div>
  )}
const root2=ReactDOM.createRoot(document.getElementById('root'))
root2.render(<DEPARTMENT/>)
function Section(props){
  return(
  <div>
    <DEPARTMENT/>
    <p>Section is {props.sec} </p>
    </div>
    )
   }
   const root3=ReactDOM.createRoot(document.getElementById('root'))
   root3.render(<div>
    <Section sec="A"/>
    <Section sec="B"/>
   </div>
   )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();