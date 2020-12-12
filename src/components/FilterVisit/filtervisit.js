import { useState } from "react";
import "./filtervisit.css";
function RenderFilterVisit() {
  let people = [
    {
      id : 0 , name : "Rasul Ismoilov" 
    },
    {
      id : 1 , name : "Usmon Masudjonov" 
    },
    {
      id : 2 , name : "Jahongir Adizov" 
    },
    {
      id : 3 , name : "John Terry" 
    }
    
  ] ;
  
  let dataUsers = [
    {
      id : 0 , userId : 0 , visitDate : "2020-12-12" , visit : true , score : 2
    },
    {
      id : 1 , userId : 2 , visitDate : "2020-12-12" , visit : false , score : 0
    },
    {
      id : 2 , userId : 1 , visitDate : "2020-12-12" , visit : false , score : 0
    },
    {
      id : 3 , userId : 3 , visitDate : "2020-12-12" , visit : true , score : 1
    },
    {
      id : 4 , userId : 0 , visitDate : "2020-10-12" , visit : false , score : 0
    },
    {
      id : 5 , userId : 2 , visitDate : "2020-10-12" , visit : true , score : 5
    },
    {
      id : 6 , userId : 1 , visitDate : "2020-10-12" , visit : true , score : 5
    },
    {
      id : 7 , userId : 3 , visitDate : "2020-10-12" , visit : true , score : 1
    }
  ] ;
  
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
      
      