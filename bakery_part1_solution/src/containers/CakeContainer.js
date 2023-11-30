import { useState } from "react";
import Cake from "../components/Cake";

const CakeContainer = () => {

    const [victoriaSponge, setVictoriaSponge] = useState(
        {
            cakeName: "Victoria Sponge",
            ingredients: [
                "eggs",
                "butter",
                "sugar",
                "self-raising flour",
                "baking powder",
                "milk"
            ],
            price: 5,
            rating: 5
        }
    );

    const [teaLoaf, setTeaLoaf] = useState(
        {
            cakeName: "Tea Loaf",
            ingredients: [
                "eggs",
                "oil",
                "dried fruit",
                "sugar",
                "self-raising flour",
                "strong tea",
            ],
            price: 2,
            rating: 3
        }
    );

    const [carrotCake, setCarrotCake] = useState(
        {
            cakeName: "Carrot Cake",
            ingredients: [
                "carrots",
                "walnuts",
                "oil",
                "cream cheese",
                "flour",
                "sugar",
            ],
            price: 8,
            rating: 5
        }
    );

    // AVERAGE RATING
    const averageRating = (victoriaSponge.rating + teaLoaf.rating + carrotCake.rating) / 3;

    // EXTENSION - TRACKING REVENUE

    const [revenue, setRevenue] = useState(0);

    const updateRevenue = (saleValue) => {
        setRevenue(revenue + saleValue);
    }

    return(
        <>
            <p>Average rating: {averageRating}</p>
            <div className="container">
                <Cake cake={victoriaSponge} updateRevenue={updateRevenue}/>
                <Cake cake={teaLoaf} updateRevenue={updateRevenue} />
                <Cake cake={carrotCake} updateRevenue={updateRevenue} />
            </div>
            <p id="price">Total sales: £{revenue}</p>
        </>
    )

}

export default CakeContainer;
