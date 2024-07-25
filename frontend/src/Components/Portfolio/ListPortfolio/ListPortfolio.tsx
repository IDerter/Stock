import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
    portfolioValues: string[];
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({portfolioValues, onPortfolioDelete}: Props) => {
  return (
    <>
    <h3>MyPortfolio</h3>
    <ul>
        {
            portfolioValues.map((portfolioValue) => {return <CardPortfolio portfolioValue={portfolioValue} onPortfolioDelete = {onPortfolioDelete} />})
        }
    </ul>
    </>
  )
}

export default ListPortfolio