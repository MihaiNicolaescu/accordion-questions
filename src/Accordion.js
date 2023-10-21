 import { useState } from "react";
import "./style/accordion.css";

 export default function Accordion({ country, idExpanded, onOpen}){

    const [isExpanded, setIsExpanded] = useState(country.id === idExpanded);
    console.log(country);
    function expand(){
        if(idExpanded === null || idExpanded === country.id){
            onOpen(isExpanded ? null: country.id);
            setIsExpanded(!isExpanded)
        }

    }

    return(
        <div className="Accordion">
            <div  onClick={() => expand()}  className={`accordion-header ${isExpanded ? "accordion-header-expanded" : ""}`}>
                <h1>{country.country}</h1>
                <p className="expand-button">{isExpanded ? "-" : "+"}</p>
            </div>
            {isExpanded ?  
            <div className="expand">
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <p>Currency: {country.currency}</p>
                <p>Language: {country.language}</p>
                <img className="flag" alt="flag" src={country.flag} />
            </div> : ""}
           
        </div>
    )
}