import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

 class Login extends React.Component{
   render(){
     return(
       <div className="clan">
         <h1>Activation Screen</h1>
         <div className="smart">
            <div className="txt">
               <h2>Directions-</h2>
               <p>Enter your content. We can here type anthing we want </p>
            </div>
            <div className="login">
               <input type="text" placeholder="REGCODE"></input><br />
               <input type="text" placeholder="REQUESTOR ID"></input><br />
               <button className="sub">Submit</button><br />
               <textarea></textarea><br />
               <button className="auth">Check Auth</button>
               <button className="down">DownLoad Logs</button><br />
            </div>
         </div>
       </div>
     );
   }
 }

ReactDOM.render(<Login />, document.getElementById('root'));
