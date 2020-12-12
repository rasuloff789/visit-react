import { useState } from "react";
import "./filtervisit.css";
import { people , dataUsers } from '/Users/rasulismoilov/Documents/Documents/web-backend/visit/src/components/data.js';
function RenderFilterVisit() {
  
  let TODAY = new Date();
  let YEAR = String(TODAY.getFullYear() );
  let MONTH = String(TODAY.getMonth() + 1);
  let DATE = String(TODAY.getDate() );
  
  let getToday = `${YEAR}-${MONTH.padStart(2,"0")}-${DATE.padStart(2,"0")}`;
  let todaysCollection = dataUsers.filter(row => row.visitDate === getToday);
  let [filteredArray , editData ] = useState(todaysCollection);
  
function renderData(array) {
  return  array.map(row => {
    return ( 
      <li key={row.id} className="user-item">
      <span className="user-name" >{people.find(obj =>  obj.id === row.userId).name}</span>
      <span className="user-visit">{row.visit ? "OK" : "-"}</span>
      <span className="user-score" >{row.score}</span>
      </li>
      );
    }
    )
  };
return (
  <div className="filter-box">
  <input id="elDateInput" defaultValue={getToday} type="date" onChange={
    (e) => {editData(dataUsers.filter(obj => {return obj.visitDate === e.target.value}));}} />
    <ul id="list" className="user-list" >{renderData(filteredArray)}</ul>
    </div>
    );
  };
      
export default RenderFilterVisit;
      
      