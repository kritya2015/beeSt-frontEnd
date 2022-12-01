import React from 'react'
import axios from 'axios'

function Getb(){
    axios.get("http://localhost:4000/massbunk/getAllPost")
.then(data => {console.log(data.data);
var r=document.getElementById("root")
for(var a=0;a<data.data.length;a++){
r.innerHTML+=data.data[a].content
r.innerHTML+="<br>"}
})
.catch(error => console.log(error));
return " ";
}

function bee() {
  return (
    <div>bee</div>
  )
}

export default bee