import React, { useState,useEffect} from 'react';
import Recipies from '../JSON/recipies';
import {useNavigate} from 'react-router-dom';

const UserHome = () => {
  
  const [recipies]=useState(Recipies);
  const [loadMore , setLoadMore] = useState(recipies.length-3);
  const navigate = useNavigate();


  const handleOnClick = (recipe) => {navigate('/RecipeInst',{state:recipe})};
 
  return (
    <div className='py-4 py-lg-5'>
      <div className='row row-cols-1 g-5 mx-1 mx-lg-5'>
            {
              recipies.slice(loadMore).map((recipe)=>{
                return (
                <div className='col'>
                  <div className='card cardStyle'>
                    <div className='card-header cardHeaderStyle'><h4>{recipe.name}</h4></div>
                    <div className='card-body bg-light'>
                      <span>{recipe.description}</span><br></br><br></br>
                      <span><b>Category:</b> {recipe.category}</span><br></br>
                      <span><b>Created By:</b> {recipe.createdBy}</span>
                    </div>
                    <div className='card-footer text-center'>
                      <button className='btn btn-dark mx-2 w-25' onClick={()=>handleOnClick(recipe)}>View</button>
                    </div>
                  </div>
                </div>
              )
              })
            }
      </div>
      <br></br><br></br>
      <div className='text-center'>
      <button className='btn btn-dark w-25' disabled={loadMore<=0} onClick={()=>setLoadMore(loadMore-3)}>Load More</button>
      </div>
    </div>  
   
  )
}

export default UserHome