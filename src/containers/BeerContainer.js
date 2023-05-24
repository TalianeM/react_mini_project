import { useEffect } from "react";
import Beer from "../components/Beer";
import BeerList from "../components/BeerList";

const BeerContainer = () => {

// useEffect to call API data 

useEffect(  () => {
    fetch("https://api.punkapi.com/v2/beers") 
    .then((response) => response.json)
    .then((jsonData) => console.log(jsonData))
}, [])

    
    return(
        <>
        <p>Testing Testing</p>
        <BeerList/>
        </>
    );
}

export default BeerContainer;