import React, { Component } from 'react'
import data from '../data'
import Product from './product'
import './style.css'
import {connect}from 'react-redux'


 class ProductList extends Component {


    render() {
        const products=[...data];
        return (
            <div>
            <div className="product">
                {
                products.map(p=><Product key={p.id} name={p.name} description={p.description} img={p.img} price={p.price} unit={p.unit}/>)
                }
            </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        amount:state.total,
        addedItems:state.addedItems,
    }
}
export default connect(mapStateToProps,null)(ProductList)