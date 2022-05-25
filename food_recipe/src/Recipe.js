import React from 'react'
import $ from 'jquery'
import './recipe.css'


function Recipe({ recipe }) {
    function slide(e){
        var thisAnchor = $(this);
        var ul = thisAnchor.parents('.main');
        ul.find('.more-info').slideUp();
        console.log(e.nextSibling.nextElementSibling);
    };
    return ( 
       
        <div className = 'recipe' >
            <h1 className='food_name'> { recipe['recipe']['label'] } </h1>
        <div className='items' >
        <img className='food_image' src={recipe['recipe']['image']} />
        
        <div className='healthline'>
            <a onClick={(e)=>{if(e.target.nextElementSibling.style.display==='none'){e.target.nextElementSibling.style.display='block'}else{e.target.nextElementSibling.style.display='none'}}}>Health Line</a>
            <ul className='more-info' style={{display:'none'}}>
         {recipe['recipe']['healthLabels'].map(health=>{
             return <li>{health}</li>
         })}
        </ul>

        </div> 
        <div className='recipe_'>
            <a onClick={(e)=>{if(e.target.nextElementSibling.style.display==='none'){e.target.nextElementSibling.style.display='block'}else{e.target.nextElementSibling.style.display='none'}}}>Ingredients</a>
            <ul className='more-info' style={{display:'none'}}>
         {recipe['recipe']['ingredients'].map(health=>{
             return <li>{health['text']}</li>
         })}
        </ul>

        </div> 
        <div className='healthline'>
            <a onClick={(e)=>{if(e.target.nextElementSibling.style.display==='none'){e.target.nextElementSibling.style.display='block'}else{e.target.nextElementSibling.style.display='none'}}}>Nutrient Level</a>
            <ul className='more-info' style={{display:'none'}}>
         {recipe['recipe']['dietLabels'].map(health=>{
             return <li>{health}</li>
         })}
        </ul>

        </div> 
        </div> 
        
        
        </div>
    )
}
export default Recipe;