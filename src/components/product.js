import React, { Component } from 'react'
import {connect} from 'react-redux'
import {AddToCart,DeleteFromCart} from '../store/action/Product'

export class Product extends Component {
    state={
        item:{
        name:this.props.name,
        img:this.props.img,
        price:this.props.price,
        id:this.props.id,
        description:this.props.description,
        unit:this.props.unit
        }
    }
    onClickHand=(item)=>{
        this.props.AddToCart(item);
    }
    render() {
        return (
            <div className="indi">
                <article className="mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 p" id={this.props.id}>
                <img src={this.props.img} alt={this.props.name}/>
                <div className="pa2 ph3-ns pb3-ns">
                    <div className="dt w-100 mt1">
                      <div className="dtc">
                         <h1 className="f5 f4-ns mv0">{this.props.name}</h1>
                      </div>
                     <div className="dtc tr">
                      <h2 className="f5 mv0">${this.props.price}</h2>
                      
                     </div>
                    </div>
                 <p className="f6 lh-copy measure mt2 mid-gray">
                    {this.props.description}
                 </p>
                 <button className="f6 link dim br2 ph3 pv2 bn mb2 dib white bg-near-black"
                  onClick={()=>this.onClickHand(this.state.item)}
                 >Add</button>
                </div>
                </article>
            </div>
        )
    }
}

const mapDispatchToProps= dispatch =>{
    return{
        AddToCart: (item) => dispatch(AddToCart(item)),
        DeleteFromCart:(item)=>dispatch(DeleteFromCart(item))
    }
}

export default connect(null, mapDispatchToProps)(Product)
