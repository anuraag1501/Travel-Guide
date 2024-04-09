import { useState } from "react";

function Card({id, name, info, image, price, removeTour}){
  const [readmore, setReadmore] = useState(true);
  const [description, setDescription] = useState(`${info.substring(0,200)}....`);

  function readmoreHandler(){
    //--------!!! USESTATE is processed ASYNCHRONOUSLY !!!-----------//

    setDescription(!readmore ? `${info.substring(0,200)}....` : info);
    
    setReadmore(!readmore);
  }

  return (
    <div className="card">

      <img scr={require(`${image}`)} className="image_card"/>
      
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore? 'Read More' : 'Show Less'}
          </span>
        </div>
      </div>
      
      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;