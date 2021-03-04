import React, { useMemo } from 'react'
import queryString  from "query-string";
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q='' } = queryString.parse( location.search );

    

    const [ formValues, handleInputChange ] = useForm({ searchText: q});
    const { searchText } = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
 
    //const heroesFiltered = getHeroesByName(searchText);

    const handleSearch = (e) => {
        e.preventDefault();
        //console.log(searchText)
        history.push(`?q=${ searchText }`);
    }

   
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5" key="uniqueId0">
                    <h4> Search Form</h4>
                    <hr />
                    <form onSubmit={ handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange = { handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...

                        </button>
                        
                            
                        
                    </form>    

                </div>

                <div className="col-7" key="uniqueId1">
                    <h4>
                        Results
                    </h4>
                    <hr />
                    {
                    (q ==='') &&
                       <div className="alert alert-info">
                           Search a hero
                       </div>         
                    }
                    { 
                    
                    (q!=='' && heroesFiltered.length === 0) && 
                    
                        <div className="alert alert-danger">

                            There is not a hero hero with { q }

                        </div>
                    }

                    { heroesFiltered.map ( hero => (
                        <HeroCard
                            hey ={ hero.id}
                            {...hero}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}
