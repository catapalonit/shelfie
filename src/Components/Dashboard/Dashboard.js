import React, { Component } from 'react';
import Product from "../Product/Product"

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inventory: []
        };
    }

    render() {
        return (
            <div>
                <div> Dashboard </div>
                <Product />
                <div key={this.props.inventory.id}>
                    <img src={this.props.inventory.image_url} alt="altsomething" />
                    <h1>{this.props.inventory.product_name}</h1>
                    <h1>{this.props.inventory.price}</h1>
                </div>
            </div>
        );
    }
}