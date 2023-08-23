import ImgCard from './imgCard';
import './App.css';
import React from 'react';
import data from './data';
function App() {
  return (

     <div className='card-div'>
      {
         data.map((item)=>{
          return (<ImgCard title={item.title} desc={item.desc} imgUrl={item.imgUrl} className='card'/>)
      })
      }
     </div>
     
  );
}

export default App;
