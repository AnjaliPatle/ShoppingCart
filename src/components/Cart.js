import React, { Component } from 'react'
import {connect}from 'react-redux'
import {AddToCart,DeleteFromCart} from '../store/action/Product'

export  class Cart extends Component {

  onDel=(item)=>{
    this.props.DeleteFromCart(item);
  }
  onAdd=(item)=>{
    this.props.AddToCart(item);
  }
    render() {
        return (
            <div className="cart">
                 <main className="mw6 center bt bb pt2 pb2 ">

                {
                this.props.addedItems.map((p)=>
                
               
  <article>
    <div className=" dt w-100 bb b--black-10 pb2 mt2 blue">
      <div className="dtc w3">
        <img src={p.img} className="db w-100" alt={p.name}/>
      </div>
      <div className="dtc v-top pl2">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">{p.name}</h1>
        <h1 className="f6 f5-ns fw6 lh-title ml0 mv0 pt2 fl">Price ${p.price}</h1>
        <div className="fr pl2">
        <button type="button" class="no-underline near-black bg-animate bg-near-gray hover-bg-white inline-flex items-center btn-xxs" onClick={()=>{this.onAdd(p)}}>🠹</button>
      <br></br>
      <button type="button" class="no-underline near-black bg-animate bg-near-gray hover-bg-white inline-flex items-center btn-xxs" onClick={()=>{this.onDel(p)}}>🠻</button>
      </div>
        <h1 className="f6 f5-ns fw6 lh-title ml0 mv0 pt2 fr">Units: {p.unit}</h1>
      </div>
      
    </div>
  </article>

 )}
 {this.props.amount?<h1 id="total">Total: ${this.props.amount}</h1>:<h1>Your Cart is Empty!</h1>}
</main>

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

const mapDispatchToProps= dispatch =>{
  return{
      AddToCart: (item) => dispatch(AddToCart(item)),
      DeleteFromCart:(item)=>dispatch(DeleteFromCart(item))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)