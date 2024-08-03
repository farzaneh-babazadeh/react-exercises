import React, { useState } from 'react';
import './Card.css';
const Num4 = () => {
    const[cards]=useState([

        {  
            title:"Lily Thompson",
            text:"my name is Lily Thompson",
            career:"UX/UI Designer"
         
            
           
        },
        {  
            title:"William Johnson",
            text:'my name is William Johnson',
             career:"Data Scientist"
           
        },
        {  
            title:"Olivia White",
            text:'my name is Olivia White',
            career:"Cybersecurity Analyst"
            
        },
        {   
            title:"Ethan Carter",
            text:'my name is Ethan Carter',
             career:"Full Stack Developer"
           
        }



        
    ])
    return (
      
            <section className='mt-5' >
                <div className='container mt-5'>

<div className='cards'>
{cards.map((card,i) => (
     <div key={i} className='card'>
  
     <h3>{card.title}</h3>
     <p>{card.text}</p>
     <small>{card.career}</small>
     </div>   
    ))}

</div>
                </div>
            </section>
    
    );
};

export default Num4;