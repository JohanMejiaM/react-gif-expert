import React from 'react'
import {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])


    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        //console.log(newCategory);
        //categories.push(newCategory);

        setCategories([newCategory,...categories]);
        //setCategories(cat => [...cat, newCategory]);
    }

  return (
    <>

        <h1>GifExpertApp</h1>  

        <AddCategory 
        // propCategories={ setCategories }
          onNewCategory = {(value) => onAddCategory(value)}
        />


        {
          categories.map( (category) => (
                  <GifGrid
                      key={category}
                      category= {category} />
            ))
            
        }





    </>
  )
}
