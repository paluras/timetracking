import { useState } from 'react'

import './App.css'
import Card from './Card'
import data from "../src/data.json" 

function App() {
  const [count, setCount] = useState('daily')

function handleClickWeek(){
 return(setCount('weekly'))
}
function handleClickDay(){
  return(setCount("daily"))
 }
 function handleClickMonth(){
  return(setCount('monthly'))
 }
console.log(count);

let colors1 = '';
let colors2 = '';
let colors3 = '';

if(count == "daily"){
  colors1 = "White"
}else if(count == 'weekly'){
  colors2 = "White"
}else{
  colors3 ="White"
}


const datas = data;
interface TimeframeData {
  daily: {
    current: number;
    previous: number;
  };
  weekly: {
    current: number;
    previous: number;
  };
  monthly: {
    current: number;
    previous: number;
  };
}

interface ActivityData {
  title: string;
  timeframes: TimeframeData;
}
//console.log(datas[0].timeframes.daily);

//On click dates
//if click on dayly display dayly values

console.log(datas[0].timeframes.daily.current);

  return (
    <div className="App">
        <div className='main-app'>
          <div className='name-card'>
            <div className='name-report'>
              <img className='profile-img' src='https://github.com/paluras/treack/blob/main/src/assets/image-jeremy.png?raw=true'
              alt='profile-pic'></img>
              <div className='text'>
              <p>Report for</p>
              <h1>Jeremy Robson</h1>
              </div>
            </div>
            <div className='dates'>
              <ul onClick={handleClickDay} style={{color: colors1}} >Daily</ul>
              <ul onClick={handleClickWeek} style={{color: colors2}}>Weekly</ul>
              <ul onClick={handleClickMonth}style={{color: colors3}}>Monthly</ul>
            </div>
          </div>
          <Card 
       
         hours = {datas[0].timeframes[count as keyof TimeframeData].current}
 
          hoursPrev= {datas[0].timeframes[count as keyof TimeframeData].previous}
          text={datas[0].title} 
          color={'work-color'}
          bg={"#ff8b64"} />
          <Card 
          hours={datas[1].timeframes[count as keyof TimeframeData].current} 
          hoursPrev= {datas[1].timeframes[count as keyof TimeframeData].previous}
          text={'Play'} 
          color={'play-color'}
          bg={"#56c1e6"} />
           <Card 
          hours={datas[2].timeframes[count as keyof TimeframeData].current} 
          hoursPrev= {datas[2].timeframes[count as keyof TimeframeData].previous}

          text={'Study'} 
          color={'study-color'}
          bg={"#ff5e7d"} />
           <Card 

          hoursPrev= {datas[3].timeframes[count as keyof TimeframeData].previous}
          hours={datas[3].timeframes[count as keyof TimeframeData].current} 
          text={'Exercise'} 
          color={'exercise-color'}
          bg={"#4bcf83"} />
           <Card 

          hoursPrev= {datas[4].timeframes[count as keyof TimeframeData].previous}
          hours={datas[4].timeframes[count as keyof TimeframeData].current} 
          text={'Social'} 
          color={'social-color'} 
          bg={"#7235d1"}/>
           <Card 

          hoursPrev= {datas[5].timeframes[count as keyof TimeframeData].previous}
          hours={datas[5].timeframes[count as keyof TimeframeData].current} 
          text={'Self Care'} 
          color={'self-color'} 
          bg={"#f1c75c"}/>

        </div>

    </div>
  )
}

export default App
