const Cake = ({cake, updateRevenue}) => {

return(
    <div className="cake">
        <h3>{cake.cakeName}</h3>
        <h4>Ingredients:</h4>
        <ul>
            // added mapped by method to for cake.js after lab review
            {cake.ingredients.map( ingredient => {
                return <li>{ingredient}</li>
            })}
        </ul>
        <p>Rating: {cake.rating}</p>
        <p>Price: £{cake.price}</p>
        <button onClick={handleButtonClick}>Sell Cake</button>
    </div>
    )

}
