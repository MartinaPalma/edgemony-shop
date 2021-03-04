import React from 'react'

import "./Loading.css";

function Loading({ isLoading }) {
    return (
        // isLoading ?
        <div className="isLoading">
            <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <h3>loading</h3>
        </div>
        // :
        // !isError && < ProductList products = { products }
        // openProductModal = { openProductModal }
        // />   
    );

}

export default Loading