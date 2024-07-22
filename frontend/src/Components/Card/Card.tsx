import React from 'react'
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card : React.FC<Props> = ({ companyName, ticker, price }: Props) : JSX.Element => {
  return (
    <div className='card'>
        <img src = "https://cdn.pixabay.com/photo/2023/07/22/05/50/wolf-8142720_640.png" />
        <div className='details'>
            <h2>
              {companyName} ({ticker})
            </h2>
            <p>${price}</p>
        </div>
        <p className='info'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati accusamus ratione praesentium adipisci corrupti. 
            Tempora vero commodi officia, molestias at quasi non est architecto quod! Dignissimos tempora sint ad quia?
        </p>
    </div>
  )
}

export default Card