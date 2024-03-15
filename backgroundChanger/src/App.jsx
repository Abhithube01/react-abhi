import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("black");
 
  return (
    <div className="full-page" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-3 rounded-3xl'>
          <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg border border-black" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg border border-black" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg border border-black" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg border border-black" style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg border border-black" style={{backgroundColor:"pink"}}>Pink</button>
        </div>
        </div>
    </div>
  );
}

export default App;
