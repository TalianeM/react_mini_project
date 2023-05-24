
const Beer = ({beer}) => {


    // beer name, id, description, image
    return(
        <>
        <li>{beer.name}</li>
        <p>tagline: {beer.tagline} </p>
        <p>description: {beer.description}</p>
        </>
    );

}

export default Beer;