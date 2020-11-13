import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

function GifExpertApp() {

    const [categories, setCategories] = useState(['One Piece'])
  

    return (
        <>
            <h2> Gif Expert App </h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                { 
                    categories.map( element => 
                    <GifGrid 
                        category={ element } 
                        key={ element }
                     /> )
                }
            </ol>

        </>
    )
}

GifExpertApp.propTypes = { }

export default GifExpertApp;