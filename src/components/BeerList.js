import Beer from "./Beer";

const BeerList = ({beers}) => { 

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