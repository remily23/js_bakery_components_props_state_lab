import { useState } from 'react';
import Cake from "../components/Cake";

const CakeContainer = () => {

    const [victoriaSponge, setVictoriaSponge] = useState = (
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
        "strong tea"
     ],
        price: 2,
        rating: 3
    }
);

{
  const [carrotCake, setCarrotCake] = useState(
    cakeName: "Carrot Cake",
      ingredients: [
        "carrots",
         "walnuts",
         "oil",
         "cream cheese",
         "flour",
         "sugar"
      ],
        price: 8,
        rating: 5
    } 
);
// return (
//     <>
//     <h1>Cakes</h1>
    
    
//     </>

    // <>
    // const cakePTag = document.createElement("p");
    // namePTag.innerText = data.cakeName.common;

    // </>
)
