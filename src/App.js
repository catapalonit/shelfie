import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import Dashboard from "./Components/Dashboard/Dashboard.js"
import Form from "./Components/Form/Form.js"
import Header from "./Components/Header/Header.js"


class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [
        {
          image_url: "https://images.autofusion.com/pricebooks_data/usa/colorized/2019/Toyota/View2/4Runner/TRD_Pro/8674_040.png",
          product_name: "CAR IM GONNA BUY WHEN I GET RICH FROM ALL THIS HARD WORK",
          price: "$45,000",
        },
        {
          image_url: "https://www.usmoneyreserve.com/wp-content/uploads/2015/07/gold-bar-1-kilo-600x600.jpg",
          product_name: "12.4 kg 24k Gold Bar",
          price: "$531,031",
        },
        {
          image_url: "https://pikfly.com/images/products/141/21254.jpg",
          product_name: "6 pack of Dale's",
          price: "$8.99",
        }
      ]
    }
  }

  componentDidMount() {
    axios.get("/api/inventory").then(response => {
      this.setState({ inventory: response.data })
    })
  }


  render() {
    return (
      <div className="app">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;