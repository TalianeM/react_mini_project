import Beer from "./Beer";

const BeerList = ({beers}) => { 

    const beerComponents = beers.map((beer) => <Beer />) 


    // Mapping over beers array and for each beer inside the array
    // return 
    // const beerComponents = beers.map((beer) => {
    //     return <Beer
    //          beer={beer} 
    //         key={beer.id}/>
    // })

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