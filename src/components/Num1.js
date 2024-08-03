import React from 'react';
import { useEffect, useState } from 'react';
const Num1 = () => {
    const[state,setState]=useState(1);


    useEffect((index)=>{
      setState(state)
    },[state])
    // const action=(index)=>{
    //   setState(index)
    //   console.log(index);
    // }
    return (
       
            
<>
<div className='mt-5 container'>
<div className='row justify-content-center'>
<aside className='mt-3 pt-5 col-md-3 col-sm-12'>
<ul className='d-flex flex-md-column flex-sm-row m-md-5'>
<i className=' tab px-1 m-2 btn btn-outline-dark' onClick={()=>setState(1)}>Show Post 1</i>
  <i className='tab px-1 m-2 btn btn-outline-dark' onClick={()=>setState(2)}>Show Post 2</i>
  <i className='tab px-1 m-2 btn btn-outline-dark' onClick={()=>setState(3)}>Show Post 3</i>
  <i className='tab px-1 m-2 btn btn-outline-dark' onClick={()=>setState(4)}>Show Post 4</i>
</ul>
</aside>

<div className='d-flex col-sm-12 col-md-9'>
<div className='bg-color w-100'>
<div className={`${state===1?'show-content':'content'}`}>
  <div className='text-center m-5 height'>
<img src='./img/01.jpg' alt=''/>
<h1>Butterfly</h1>
<p className='fw-bold'>
Butterflies are beautiful insects that undergo a remarkable transformation from caterpillar to butterfly. They come in various vibrant colors and are known for their graceful flight.
</p>


  </div>
</div>


<div className={`${state===2 ?'show-content':'content'}`}>
  <div className='text-center m-5 height'>
  <img src='./img/02.jpg' alt=''/>
<h1>Beach</h1>
<p className='fw-bold'>
The beach is a tranquil oasis with soothing waves and warm sand, offering a peaceful retreat from the chaos of daily life.
</p>


  </div>
</div>

<div className={`${state===3 ?'show-content':'content'}`}>
  <div className='text-center m-5 height'>
  <img src='./img/03.jpg' alt=''/>
<h1>Flower</h1>
<p className='fw-bold'>
Flowers are nature's delicate gems, blooming in vibrant hues and spreading joy with their sweet fragrance.
</p>


  </div>
</div>


<div className={`${state=== 4 ?'show-content':'content'}`}>
  <div className='text-center m-5 height'>
<img src='./img/04.jpg' alt='' />
<h1>Eagle</h1>
<p className='fw-bold'>
The eagle soars majestically in the sky, a symbol of strength, freedom, and perseverance.
</p>


  </div>
</div>

</div>
</div>
</div>

</div>
</>


       
    );
};

export default Num1;