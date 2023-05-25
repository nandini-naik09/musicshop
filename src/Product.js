import React, {Component} from 'react';
import JSON from './db.json';
import ProductList from './ProductListing';

class Products extends Component {

    constructor(){
        super()

        this.state ={
            title: 'Products Page',
            products: JSON
        }
    }

    render(){
        console.log(this.state.products)
        return(
            <div>
                <center>
                <h3>{this.state.title}</h3>  </center>
                <ProductList prodlist={this.state.products}/>
               
            </div>
        )
    }
}

export default Products;