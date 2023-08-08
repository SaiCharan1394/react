import React from "react";
import ReactDOM  from "react-dom/client";


const heading= <h1 id='heading'>React Element</h1>;
const Heading2=()=>(<h1>Functional Component</h1>);
const Heading3=()=>(<div><Heading2/><h1>Functional Component in an another Functional Component</h1> 
 </div>);
const root=ReactDOM.createRoot(document.getElementById('card'));
// root.render(heading);
root.render(<Heading3/>);