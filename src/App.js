import React from 'react';
import './App.css';
import ivin from "./ivin.jpg";
import ivin1 from "./ivin1.jpg";
import ivin2 from "./ivin2.jpg";
import ivin4 from "./ivin4.jpg";
function App() {
  return (
    <div>
      <table border ="1" width="100%" cellSpacing = "30%" cellPadding ="10%" bgcolor ="Blue" >
        <th>
        Google
        </th>
        <th>
          Youtube
        </th>
        <th>
          Instagram
        </th>
        <th>
          Facebook
        </th>
        <th>
          Whatsapp
        </th>
        <th>
          Locate me
        </th>
      </table> 
      <img src={ivin} alt="ivin" height ="25%" width ="25%" className="img1"/>
      <img src={ivin1} alt="ivin" height ="25%" width ="25%" className="img2"/>
      <img src={ivin2} alt="ivin" height ="25%" width ="25%" className="img3"/>
      <img src={ivin4} alt="ivin" height ="25%" width ="25%" className="img3"/>
    </div>

  );

  
}

export default App
