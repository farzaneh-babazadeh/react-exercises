import React, { Component  } from 'react';
import './Card.css';
import {FaUser ,FaBookOpen,FaInfo} from 'react-icons/fa';
class Num5 extends Component {
    constructor(props){
        super(props);
        this.state={cards:
            [

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
        
        
        
                
            ]
        };
        
    }


    render() {
        return (
            
            <section className='mt-5'>
                <div className='container mt-5'>

<div className='cards'>
{this.state.cards.map((card,i) => (
     <div key={i} className='card'>
  
     <h3><FaUser/> {card.title}</h3>
     <p><FaBookOpen/> {card.text}</p>
     <small><FaInfo/> {card.career}</small>
     </div>   
    ))}

</div>
                </div>
            </section>
      
    );
       
    }
}

export default Num5;