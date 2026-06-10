
import {useMemo} from 'react';
const quotes=[
'Some dogs leave paw prints on our hearts. Cutie left an entire universe.',
'Sixteen years was not enough.',
'Forever loved. Forever remembered.'
];
export default function App(){
 const quote=useMemo(()=>quotes[Math.floor(Math.random()*quotes.length)],[]);
 return (
 <div className='app'>
  <div className='aurora'/>
  <div className='particles'/>
  <h1>🐾 Cutie</h1>
  <h2>16+ Years of Love</h2>
  <p className='quote'>{quote}</p>
  <div className='glass'>
   <h3>Memory Gallery</h3>
   <input type='file' multiple accept='image/*,video/*'/>
   <p>Add photos and videos of Cutie here.</p>
  </div>
  <div className='letter'>
   <h3>Letter to Cutie</h3>
   <textarea placeholder='Dear Cutie...'></textarea>
  </div>
 </div>)
}
