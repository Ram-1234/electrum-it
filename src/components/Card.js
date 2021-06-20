import React from 'react'

function Card(props) {

    return (
        <>
           <div className="card-data">
             {
                 props.item && props.item.length && (
                    <div>
                    <img src="https://www.rheem.com/media/get-product-image-thumbnail.php?id=737337d6-bd5c-4534-9cf3-060187ea21d6&height=410&width=410" alt="product-image" style={{width:"150px" ,height:"250px"}}/>
                    <h2>{props.item.name}</h2>
                    <p>Price:{props.item.base_price}</p>
                    </div>
                 )
             }
           </div>
        </>
    )
}

export default Card;

