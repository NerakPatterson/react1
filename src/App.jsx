import {useState} from 'react'
import './App.css'
import ProductList from './assets/Components/ProductList';
import ProductItem from './assets/Components/ProductItem';

function App() {
  const [products] = useState([
    {id: 1, name: "MDR Unisex Logo Tee", price: "19.99", description: "100% ring-spun cotton"},
    {id: 2, name: "MDR Logo Beanie", price: "19.99", description: "Versatile Kniy Beanie"},
    {id: 3, name: "MDR Logo Snapback", price: "29.99", description: "Flat Bill Snapback"},
    {id: 4, name: "MDR Unisex Logo Hoodie", price: "39.99", description: "50% Cotton/%50 Polyester Champion Hoodie"},
    {id: 5, name: "MDR Unisex Logo Tank", price: "19.99", description: "100% ring-spun cotton"},
  ]);
  
  return (
    <>
     <ProductList products={products}/>
    </>
  )
}

export default App
