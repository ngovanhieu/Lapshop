import React from "react";
import "./Card.scss";
import { Segment,Button,Icon } from 'semantic-ui-react'
import lap from "../../img/lap.jpg"




function Card() {
  return (
    <Segment>

        <div className="card">
          <img src={lap} alt="" />
        <h3>Asus  </h3>
        <p>Hãng : ASUS</p>
        <p>CPU : coi9 </p>
        <Button color="green" className='btn'>
          <Icon name="eye" /> Xem thêm thông tin ... 
        </Button>Button
      </div>

      </Segment>
  );
}

export default Card;
