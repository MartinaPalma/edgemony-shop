import React from 'react'

import "./Loading.css";

function Loading({ isLoading }) {
    return (
        // isLoading ?
        <
        div className = "isLoading" >
        <
        div className = "lds-default" > < div > < /div><div></div > < div > < /div><div></div > < div > < /div><div></div > < div > < /div><div></div > < div > < /div><div></div > < div > < /div><div></div > < /div> <
        h3 > Loading... < /h3> <
        /div>
        // :
        // !isError && < ProductList products = { products }
        // openProductModal = { openProductModal }
        // />   
    );

}

export default Loading