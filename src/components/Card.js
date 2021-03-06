import React from 'react'

function Card(props) {
   console.log(props.item)
    return (
        <>
           <div className="card-data">
             {
                 props.item && (
                    <div>
                    <div className="inner-card">
                        <h4 className="manufucture">{props.item.manufacturer_name}</h4>
                        <p className="product-name">{props.item.name}</p>
                    </div>
                    <img className="image-card" src="data:image/jpeg;base64,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" alt={props.item.key} />
                    <ul>
                   <span>
                   <i className="fal fa-question-circle"></i>
                   </span>
                    <li>{props.item.est_highlight[0]}</li>
                    <span>
                    <i className="fal fa-question-circle"></i>
                    </span>
                    <li>{props.item.est_highlight[1]}</li>
                    <span>
                    <i className="fal fa-question-circle"></i>  
                    </span>
                    <li>{props.item.est_highlight[2]}</li>
                   <span>
                   <i className="fal fa-question-circle"></i>
                   </span>
                    <li>{props.item.est_highlight[3]}</li>
                    </ul>
                    <hr/>
                    <h4 className="base-price">Base Price<strong style={{color:"#ccc5b9"}}>_________________</strong>${props.item.base_price}</h4>
                    <p className="installation">(Installation not Include)</p>
                    <p className="available">Available Incentive {<i className="fas fa-info-circle"></i>}______________________________$0</p>
                    <p className="equipment">Equipment Cost {<i className="fas fa-info-circle"></i>}_____________ <strong style={{color:"#ff9100", fontSize:"15px"}}>$1500</strong></p>
                    <p className="annual-cost">
                        Your Est. Annual Saving is <strong style={{color:"green"}}>$160</strong> {<i className="fas fa-info-circle"></i>}
                    </p>
                    <button>Get Install Quote</button>
                    <p className="more">View More Details</p>
                    </div>
                    
                 )
             }
           </div>
        </>
    )
}

export default Card;

