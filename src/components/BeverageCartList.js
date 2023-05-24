import Beer from "./Beer";


const BeverageCartList = ({beers}) => { 

    const beerComponents = beers.map((beer) => <Beer beer={beer}  />) 


    return (
        <>
        <h3> Beverage Cart </h3>
            <ul>
            {beerComponents}
            </ul>
        </>
    )
}

export default BeverageCartList

