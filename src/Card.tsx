import React from "react";


function Card (props: { hours: number ,text: string, color:string, bg:string, hoursPrev:number,}){
    
    
    
    return(
        <div style={{backgroundColor:props.bg}}  className='card' >
              <div className={props.color}></div>
              <div className='card-body'  >
                 <div className='card-nav'>{props.text}
                 <img src={'https://raw.githubusercontent.com/paluras/timetracking/f45d26bfc494c03c4d8c935f02ace48a78aa0d98/src/assets/icon-ellipsis.svg'} alt="dots"></img>
                 </div> 
            <div className="card-main">
                 <div className='hours'>{props.hours}hrs</div>
                 <div className='previous-week'>Last Week - {props.hoursPrev}hrs </div>
             </div>
              </div>
          </div>
    )
}

export default Card