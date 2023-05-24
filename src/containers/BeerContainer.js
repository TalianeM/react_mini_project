import { useEffect, useState } from "react";
import Beer from "../components/Beer";
import BeerList from "../components/BeerList";
import BeverageCartList from "../components/BeverageCartList";


const BeerContainer = () => {

const [beers, setBeers] = useState([]);

// [A21]
const [beverageCartList, setBeverageCartList] = useState([]);   

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
        <h1>Beer Shop</h1>
        <div class="beer-wrapper">
            <BeerList beers={beers}/>
            <BeverageCartList beers={beverageCartList} />
        </div>
        </>
    );
}

export default BeerContainer;