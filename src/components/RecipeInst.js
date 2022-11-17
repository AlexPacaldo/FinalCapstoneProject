import React from 'react';
import { useLocation } from 'react-router-dom';


const RecipeInst = (props) => {
    const recipie = useLocation().state;
    window.scrollTo(0, 0);
    
  return (
    <div className='d-flex justify-content-center maindiv py-4 px-3 py-md-5 px-md-1'>
        <div className='d-flex flex-column p-4'>
        <div>
            <h1><b>{recipie.name}</b></h1>
            <br />
            <h4>{recipie.description}</h4><br></br>
            <p><b>Category:</b> {recipie.category}</p>
            <p><b>Created By:</b> {recipie.createdBy}</p>
        </div>
        <br></br>
        <div className='d-flex flex-column justify-content-center body'>
            <h5>Ingredients</h5>
            <div>{
                recipie.ingredients.map((ingredient)=>{
                    return(
                        <ul>
                            <li>{ingredient.quantity}</li>
                            <li>{ingredient.name}</li>
                            <li>{ingredient.type}</li>
                        </ul>
                    )
                })
                }</div>
                <br /><br />
            <h5>Steps</h5>
            <span>{recipie.steps}</span>
        </div>
        <br></br>
    </div>
    </div>
  )
}

export default RecipeInst