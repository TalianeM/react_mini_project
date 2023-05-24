import { useEffect, useState } from "react";
import Beer from "../components/Beer";
import BeerList from "../components/BeerList";

const BeerContainer = () => {

const [beers, setBeers] = useState([]);

// useEffect to call API data 

const fetchBeers = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const jsonData = await response.json();
    setBeers(jsonData);
}

useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        setBeers(data);
    })
},[])




    
    return(
        <>
        <p>Testing Testing</p>
        <BeerList beers={beers}/>
        </>
    );
}

export default BeerContainer;