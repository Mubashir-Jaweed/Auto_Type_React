import React, { useEffect } from 'react'
import Typed from 'typed.js';

const AutoTyped = () => {

  useEffect(()=>{
    autotype()
  },[])

  const autotype = () =>{
    var typed = new Typed('.type',{
      strings:[' Eat(); Sleep(); Code(); Repeat();'],
      typeSpeed:100,
      backSpeed:20,
      loop:false,
      showCursor:false
    })

    var typePara = new Typed('.type-p',{
      strings:['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit, doloremque magni laboriosam culpa quisquam possimus cupiditate. Alias, suscipit accusantium corporis illum nesciunt itaque nulla architecto minima illo molestiae modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit, doloremque magni laboriosam culpa quisquam possimus cupiditate. Alias, suscipit accusantium corporis illum nesciunt itaque nulla architecto minima illo molestiae modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit, doloremque magni laboriosam culpa quisquam possimus cupiditate. Alias, suscipit accusantium corporis illum nesciunt itaque nulla architecto minima illo molestiae modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit, doloremque magni laboriosam culpa quisquam possimus cupiditate. Alias, suscipit accusantium corporis illum nesciunt itaque nulla architecto minima illo molestiae modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit, doloremque magni laboriosam culpa quisquam possimus cupiditate. Alias, suscipit accusantium corporis illum nesciunt itaque nulla architecto minima illo molestiae modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit, doloremque magni laboriosam culpa quisquam possimus cupiditate. Alias, suscipit accusantium corporis illum nesciunt itaque nulla architecto minima illo molestiae modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit, doloremque magni laboriosam culpa quisquam possimus cupiditate. Alias, suscipit accusantium corporis illum nesciunt itaque nulla architecto minima illo molestiae modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit, doloremque magni laboriosam culpa quisquam possimus cupiditate. Alias, suscipit accusantium corporis illum nesciunt itaque nulla architecto minima illo molestiae modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit, doloremque magni laboriosam culpa quisquam possimus cupiditate. Alias, suscipit accusantium corporis illum nesciunt itaque nulla architecto minima illo molestiae modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit, doloremque magni laboriosam culpa quisquam possimus cupiditate. Alias, suscipit accusantium corporis illum nesciunt itaque nulla architecto minima illo molestiae modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit, doloremque magni laboriosam culpa quisquam possimus cupiditate. Alias, suscipit accusantium corporis illum nesciunt itaque nulla architecto minima illo molestiae modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit, doloremque magni laboriosam culpa quisquam possimus cupiditate. Alias, suscipit accusantium corporis illum nesciunt itaque nulla architecto minima illo molestiae modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit, doloremque magni laboriosam culpa quisquam possimus cupiditate. Alias, suscipit accusantium corporis illum nesciunt itaque nulla architecto minima illo molestiae modi!',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit, doloremque magni laboriosam culpa quisquam possimus cupiditate. Alias, suscipit accusantium corporis illum nesciunt itaque nulla architecto minima illo molestiae modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit, doloremque magni laboriosam culpa quisquam possimus cupiditate. Alias, suscipit accusantium corporis illum nesciunt itaque nulla architecto minima illo molestiae modi!'],
      typeSpeed:5,
      backSpeed:5,
      loop:true,
      showCursor:false
    })
  } 
  
  return (
    <div>
      <h1 className='type'></h1>
      <p className='type-p'></p>
      <div className='light'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default AutoTyped