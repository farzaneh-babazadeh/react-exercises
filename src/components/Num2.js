import React, { useEffect, useState  } from 'react';

import './Card.css';
const Card = () => {
    const[cards,setCards]=useState([])

    useEffect(() => {
        setTimeout(() => {
            setCards([

                {  img:"img/01.jpg",
                    title:"Butterfly",
                    text:"Butterflies are beautiful insects that undergo a remarkable transformation from caterpillar to butterfly. They come in various vibrant colors and are known for their graceful flight.",
                   
                 
                    
                   
                },
                {  img:"img/02.jpg",
                    title:"Beach",
                    text:'The beach is a tranquil oasis with soothing waves and warm sand, offering a peaceful retreat from the chaos of daily life.',
                    
                   
                },
                {  img:"img/03.jpg",
                    title:"Flower",
                    text:"Flowers are nature's delicate gems, blooming in vibrant hues and spreading joy with their sweet fragrance.",
                    
                    
                },
                {   img:"img/04.jpg",
                    title:"Eagle",
                    text:'The eagle soars majestically in the sky, a symbol of strength, freedom, and perseverance.',
                    
                   
                }
                
            ])
        },2000);
      });

    return (
        
 <>
 <div className='mb-5'>
    <hr/>
 <h2 className='text-center mt-5'>Practice Num 2</h2>
 <section className='container mt-5'>
                <div className='row'>

<div className='cards'>
{cards.map((card,i) => (
     <div key={i} className='card'>
  <img  src={card.img} alt=''  style={{width: "250px", height:"150px"}}/>
     <h3>{card.title}</h3>
     <p>{card.text}</p>
     
     </div>   
    ))}

</div>
                </div>
            </section>
 </div>
 </>
       
    );
};

export default Card;