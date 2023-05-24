import Beer from "./Beer";



const BeerList = ({beers}) => { 

    // Mapping through all the beers in the api and generate all the beers 
    // Array of Beer components
    // and save it inside all the beersComponents

    const beerComponents = beers.map((beer) => <Beer beer={beer}  />) 
    



    return (
        <>
        <h3>List of Beers</h3>
        <ul>
         {beerComponents}
        </ul>
        </>
    )
}






export default BeerList;