import React, {useEffect, useState } from "react";
import shirt from '../Images/shirt.png'
import pin from '../Images/pin.png'
import cap from '../Images/cap.png'
import sticker from '../Images/sticker.png'
import './Card.css'

const images = {
    'shirt' : shirt,
    'pin' : pin,
    'cap' : cap,
    'sticker' : sticker,
}

const Card = (props) => {
    return (
        <div style={{ //Containing div for the card
                width: '200px', 
                height: '250px', 
                background: '#D9D9D9', 
                borderRadius: '30px', 
                alignItems: 'center',
                marginLeft: '10px',
                marginRight: '10px',
                marginBottom: '10px',
            }}>

            <div style={{ //The div for the image of the item
                backgroundColor: 'white',
                left: '12.5%',
                width: '150px',
                height: '150px',
                right: '12.5%',
                top: '10.08%',
                bottom: '29.44%',
                backgroundImage: 'url(' + images[props.name] + ')',
                backgroundRepeat  : 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                border: '2px solid #000000',
                borderRadius: '30px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '10%'
            }}></div>

            <div style = {{
                width: '150px',
                height: '40px',
                verticalAlign: 'middle',
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '5%',
                alignItems: 'center',
            }}>
                <div style = {{ //div for the price
                    width: '100px',
                    height: '40px',
                    background: '#D9D9D9',
                    border: '2px solid #000000',
                    borderRadius: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: "125%",
                }}>
                    {'$' + props.price + '.00'}
                </div>
                <button className="addToCartButton" onClick={() => props.addToCart(props.name, props.price)}>
                    +
                </button>
            </div>

            
        </div>
    );
}

export default Card