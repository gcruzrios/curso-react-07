import React, { useMemo } from 'react'
import { useHistory, Redirect, useParams } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { getHeroById } from '../../selectors/getHeroById';
import { withRouter } from 'react-router';




export const HeroScreen = ( {history} ) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroById( heroeId),[ heroeId ]);
    
  //  const hero = getHeroById( heroeId)

    if ( !hero ){
        return <Redirect to="/" />;
    }
    const handleReturn =() => {
        if(history.length <= 2) {
            hero.publisher === 'Marvel Comics' && history.push('/');
            hero.publisher === 'DC Comics' && history.push('/dc');
         } else {
           history.goBack();
         }
     }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,  
    } = hero;

    console.log(publisher)
   
    

    //const handleReturn = () => { 
        // if(history.length <= 2) {
        //     hero.publisher === 'Marvel Comics' && history.push('/');
        //     hero.publisher === 'DC Comics' && history.push('/dc');
        //  } else {
        //    history.goBack();
        //   //history.push('/');
          
        //  }

        // switch (publisher) {
        //     case 'DC Comics':
        //         history.push('/dc');
        //         break;
        //     case 'Marvel Comics':
        //         history.push('/marvel');
        //         break;
     
        //     default:
        //         history.push('/');
        // }
    //}

    return (
        <div className="row mt-5">
           <div className="col-4">
               <img src={`../assets/heroes/${ heroeId }.jpg`}
               alt={ superhero }
               className="img-thumbnail animate__animated animate__fadeInLeft" />
           </div>
           <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> first_appearance: </b> { first_appearance } </li>
                    
                        {/* <li className="list-group-item"> <b> characters: </b> { characters } </li> */}

                    <h5> characters </h5> 
                    <p> { characters } </p>

                    <button className="btn btn-outline-info"
                            onClick={ handleReturn }
                    >
                        Return    
                    </button>                       

                </ul>
           </div>
        </div>
    )
}
