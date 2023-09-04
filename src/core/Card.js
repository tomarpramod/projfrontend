import React from 'react'
import Imagehelper from './Helper/Imagehelper';
import { Navigate } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from './Helper/Cardhelper';



//TODO: deal with this later

const isAuthentication = true

const Card = ({
    product,
    addtoCart = true,
    removeFromCart = false
}) => {

    const cardTitle = product ? product.name : "A photo from pixcels"
    const cardDescription = product ? product.description : "default description"
    const cardPrice = product ? product.price : "default Price"

    const addToCart = () => {
        if(isAuthentication){
            addItemToCart(product, ()=>{})
            console.log("Added to cart");
        }else {
            console.log("Login Please!");
        }
    };

    const getAredirect = redirect => {
        if(redirect) {
            return <navigator to="/cart"/>
        }
    }

    const shoeAddToCart = addToCart => {
        return (
            addToCart && (
                <button
                onClick={addToCart}
                className='btn btn-block btn-outline-success mt-2 mb-2'
                >
                  Add To Cart
                </button>
            )
        )
    };

    const showRemoveFromCart = removeFromCart => {
        return (
            removeFromCart && (
                <button
                    onClick={() => {
                        removeItemFromCart(product.id)
                        console.log("Product removed from cart");
                    }}
                    className='btn btn-block btn-outline-danger mt-2 mb-2'
                    >
                    Remove From Cart
                </button>
            )
        )
    };
  return (
    <div className='card text-white bg-dark border border-info'>
        <div className="card-holder lead px-4">{cardTitle}</div>
        <div className="card-body">
            <Imagehelper product={product}/>
    
            <p className='lead bg-success font-weight-normal text-wrap px-4'>
                {cardDescription}
            </p>
            <p className="btn btn-success rounded btn-sm px-4">$ {cardPrice}</p>
            <div className="row">
                <div className="col-12">
                    {shoeAddToCart(addToCart)}
                </div>
                <div className="col-12">
                    {showRemoveFromCart(removeFromCart)}
                </div>
            </div>
        </div>
    </div>
  );
};


export default Card;















