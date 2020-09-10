import React, { useState } from 'react';

const App=()=>
{
  const newtime= new Date().toLocaleTimeString();
   const[ctime, setCtime]=useState(newtime);


 const today= new Date().toLocaleString("default", { weekday: "long" });
 const[cday, setCday]=useState(today);

   const Updatetime=()=>
   {

    let time= new Date().toLocaleTimeString();
    setCtime(time);


   let  Ntoday= new Date().toLocaleString("default", { weekday: "long" });
    setCday(Ntoday);

   };
   setInterval(Updatetime,1000)
 return(
     <>
       <h1>{ctime}</h1>
       <h2>{cday}</h2>
       <h5>By Sandeep</h5>
     </>
     );

}
export default App;