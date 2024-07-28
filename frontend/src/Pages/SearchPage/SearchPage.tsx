import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Navbar from '../../Components/Navbar/Navbar';
import Search from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';

interface Props {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]); // ([]) - initializing massive
    const [serverError, setServerError] = useState<string>("");

    const handleSearchChange = (e : ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    };

    const onPortfolioCreate = (e : any) =>
    {
      e.preventDefault();
      const exists = portfolioValues.find(portfolioValue => portfolioValue === e.target[0].value);
      if (exists) return;

      console.log(e);
      const updatedPortfolio = [...portfolioValues, e.target[0].value];
      setPortfolioValues(updatedPortfolio);
    };

    const onPortfolioDelete = (e: any) =>
    {
      console.log(e, " delete");
      e.preventDefault();
      const removed = portfolioValues.filter(
        portfolio =>{ return portfolio !== e.target[0].value  }
      )
      setPortfolioValues(removed);
    }

    const onSearchSubmit = async (e : SyntheticEvent) => {
        e.preventDefault();
        const result = await searchCompanies(search);
        if (typeof result === "string"){
          setServerError(result); 
        } else if(Array.isArray(result.data)){
          setSearchResult(result.data);
        }
        console.log(searchResult);
    }


  return (
    <div>
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      {serverError && <h1>{serverError}</h1>}
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  )
}

export default SearchPage