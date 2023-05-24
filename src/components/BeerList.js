import Beer from "./Beer";

const BeerList = () => {


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
        <Beer/>
        <hr />
        {/* {beerComponents} */}
        </>
    )
}

export default BeerList;