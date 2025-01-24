import AddQuest from './AddQuest';
import './index.css'
import React, { useState } from 'react';
function App() {


  const [quests, setQuests] = useState([])


  function saveAddQuest(titulo) {
    console.log(titulo)
  }

  return (
    <div className="flex h-screen justify-center items-center bg-slate-700">
      <div className="card w-[80%] lg:w-[50%] h-[70%] shadow-lg rounded-sm transform ease-out duration-300 items-center p-10 gap-5">
        <p className="text-4xl font-work font-bold w-fit text-center text-white">
          Quests To Do
        </p>
        <AddQuest saveAddQuest={saveAddQuest}></AddQuest>

      </div>
    </div>
  );
}


export default App;
