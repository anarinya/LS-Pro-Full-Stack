import React, { Component } from 'react';
import axios from 'axios';
import { Products } from './';

class NewProduct extends Component {
  constructor(props) {
    super(props);

    this.getProducts = this.getProducts.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      category: '',
      description: '',
      products: []
    };
  }

  getProducts() {
    const promise = axios.get('http://localhost:5000/products');
    promise.then(res => this.setState({ products: res.data }));
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleCategory(e) {
    this.setState({
      category: e.target.value
    });
  }

  handleDesc(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleSubmit(e) {
    const product = {
      name: this.state.name,
      category: this.state.category,
      description: this.state.description
    };

    const promise = axios.post('http://localhost:5000/new-product', product);
    promise.then(response => this.getProducts() );
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="NewProduct">
        Hello from NewProduct
        <input value={ this.state.name } onChange={ this.handleName } placeholder="name" />
        <input value={ this.state.category } onChange={ this.handleCategory } placeholder="category" />
        <input value={ this.state.description } onChange={ this.handleDesc } placeholder="description" />
        <button onClick={ this.handleSubmit }>Submit</button>
        <Products products={ this.state.products }/>
      </div>
    );
  }
}

export default NewProduct;