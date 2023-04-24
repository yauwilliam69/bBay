import React, {useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";

const Catalog = (props) => {

    const [catalog, setCatalog] = useState();

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
        
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        
        return array;
    }

    const getCatalog = () => {
        axios.get("http://localhost:3002/catalog") //THIS IS YOUR URL OF YOUR API
             .then((data) => {
                // console.log("received this as the catalog")
                // console.log(data.data)
                shuffle(data.data)
                setCatalog(data.data)
            }) //PROMISE API, THAT MEANS WHEN YOU GET THE DATA WHAT DO I DO WITH IT
             .catch((error) => console.log(error));  //ERROR CATCHING IN CASE WE RECIEVE AN ERROR
    };

    useEffect(() => {
        getCatalog();
        console.log("The catalog looks like ")
        console.log(catalog)
    }, [])

    return (
        <div style={{ 
            // maxWidth: '600px', 
            marginLeft: 'auto', 
            marginRight: 'auto',
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            }}>
            {
                catalog && catalog.map((entry, i) => (
                    <Card key={i} name={entry.name} price={entry.price} addToCart={props.addToCart}/>
                ))
            }
        </div>
    )

}

export default Catalog;