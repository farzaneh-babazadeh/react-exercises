// import Loading from './components/Loading';
//  import { useEffect, useState } from 'react';

import './style.css';

import Num1 from './components/Num1';
import Num2 from './components/Num2';
import Num4 from './components/Num4';
import Num5 from './components/Num5';

// import Img1 from 'img/01.jpg'
function App() {

//  const  [isLoading, setIsLoading]=useState(true);
//  useEffect(()=>{
//   setTimeout(()=>{
// setIsLoading(false);
//   },1000);
//  })



  return (
    <div className="App">
      <div>
       {/* {isLoading ===true?
      <Loading/>:
      <Num2/>} */}

     
      </div>
           <Num1/>
           <Num2/>
           <Num4/>
           <Num5/>
    </div>
  );
}

export default App;
