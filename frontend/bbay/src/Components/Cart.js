//Side menu for the cart upon clicking button
import './Cart.css'

const Cart = (props) => {
    let total = 0
    let cartItems = []
    for (const item in props.cart) {
        let subtotal = props.cart[item].quantity * props.cart[item].price
        cartItems.push({'itemName':item, 'quantity':props.cart[item].quantity, 'price': '$' + subtotal})
        total += subtotal
    }
    console.log("The generated cart looks like", cartItems)
    if (cartItems.length == 0) {
        return (
            <div>
                <h2>My Cart</h2>
                <h3>Its empty!</h3>
                <h3>Add items to fund WDB's trip to Hawaii 😢</h3>
            </div>
        )
    } 
    return (
        <div>
            <h2>My Cart</h2>
            <ul>
            {
                props.cart && Object.keys(props.cart).length > 0 && cartItems.map((entry, i) => (
                    <li key={i}>{entry['itemName'] + ' x ' + entry['quantity'] + ': ' + entry['price']}</li>
                ))
            }
            <br></br>
            <li>Total: ${total}.00</li>

            </ul>
            <button className='order-button'> Order! </button>
            
        </div>
    )
}

export default Cart