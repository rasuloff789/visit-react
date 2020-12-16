import { people , dataUsers } from '../data.js';

import { useState } from "react";

import "./findvisit.css" ;

function RenderFindVisit() {
  
  function RenderUserInfo(array) {
    
    return(
      array.map(obj => {
        return (
          <li key={obj.id} className="find-item">
          <span className="find-date">{obj.visitDate}</span>
          <span className="find-visit">{obj.visit ? "OK" : "-"}</span>
          <span className="find-score">{obj.score}</span>
          </li>
          )
        })
        );
      };
      
      
      function findUserById(id) {
        return (
          dataUsers.filter(obj => {
            return String(obj.userId) === String(id) ;
          })
          )
        }
        
        
        
        function RenderOptions(array) {
          return(
            array.map(obj => {
              return <option key={obj.id} value={obj.id}>{obj.name}</option>
            })
            );
          };
          
          const firstUserArray = findUserById(people[0].id);
          
          const [ findedVisitsArray , setFindedVisit ] = useState(firstUserArray) ;
          
          
          return (
            <div className="select-box">
            <select id="select" name="user_name" onChange={e => {
              setFindedVisit(findUserById(e.target.value)); 
            }}>{RenderOptions(people)}</select>
            <ul className="finded-list">
            {RenderUserInfo(findedVisitsArray)}
            
            {/* <li className="find-item">
            <span className="find-date">SUMM :</span>
            <span className="find-score">{
              findedVisitsArray.reduce(function(previousValue, currentValue) {
                return previousValue.score + currentValue.score;
              })
            }</span>
            </li> */}
            </ul>
            </div>
            );
          };
          
          export default RenderFindVisit