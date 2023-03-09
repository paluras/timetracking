import React from "react";


function Card (props: { hours: number ,text: string, color:string, bg:string, hoursPrev:number,}){
    
    
    
    return(
        <div style={{backgroundColor:props.bg}}  className='card' >
              <div className={props.color}></div>
              <div className='card-body'  >
                 <div className='card-nav'>{props.text}
                 <img src='src\assets\icon-ellipsis.svg'></img>
                 </div> 
            <div className="card-main">
                 <div className='hours'>{props.hours}</div>
                 <div className='previous-week'>Last Week - {props.hoursPrev} </div>
             </div>
              </div>
          </div>
    )
}

export default Card