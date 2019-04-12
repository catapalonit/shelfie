import React, { Component } from 'react';
// import axios from "axios"

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            image_url: "",
            product_name: "",
            price: "",
            inventory: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        console.log("hit")
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });

    }

    handleCancel(value) {
        if (value) {
            console.log(value);
            this.setState({ value: null }); // <-- reset value works but addinga  prevent default breaks it for some reason
        };

    }


    render() {
        return (
            <div className="form" >
                <form>
                    <label> Image URL: <br />
                        <input type="text" name="image_url" value={this.state.image_url} onChange={this.handleChange} />
                    </label>
                    <label> Product Name: <br />
                        <input type="text" name="product_name" value={this.state.product_name} onChange={this.handleChange} />
                    </label>
                    <label> Price: <br />
                        <input type="text" name="price" value={this.state.price} onChange={this.handleChange} />
                    </label>
                    <div className="formButtons2">
                        <button className="formButtons" onClick={this.handleCancel}>Cancel</button>
                        <button className="formButtons" onClick={this.handleSubmit}>Add to Inventory</button>
                    </div>
                </form>
            </div>
        );
    }
}
