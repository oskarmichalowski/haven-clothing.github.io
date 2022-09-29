import  './App.css';
import React from 'react'
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import About from 'components/About';
import ProductList from './components/ProductList';
import ContactUs from 'components/ContactUs';

// import { Wrapper, Status } from "@googlemaps/react-wrapper";

//Context Shopping Cart Idea https://codesandbox.io/s/nnwl26w86l

//Google Map API


//Contentful query
const query = `query{
  pageCollection{
    items{
      logo {
        url  
      } 
      title
      price
      productDescription
      slug
    }
  }
}
`

function App() {
  const [products, setProducts] = useState([])



  //Fetching data or authentication by using useEffect is known as 'side-effect'

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/gah1iulwmgz2/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer IRtiTTFV0nv8MSRgvLJG1ArzsBPxSKshjas3L8ss6fo",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors)
        } else setProducts(data.pageCollection.items)

        //GRAPHIQL
        //https://graphql.contentful.com/content/v1/spaces/gah1iulwmgz2/explore?access_token=IRtiTTFV0nv8MSRgvLJG1ArzsBPxSKshjas3L8ss6fo


        //START HERE ->
        /* setProducts(data.pageCollection.items[0]); */

        // const productsArr = data.pageCollection.items

      
        
      });
  }, []);

  if (!products) {
    return "Loading...";
  }
  
  return (
    <div className="App">
      <Navbar />
      {/* <ProductList products={products} logo={products.logo.url} title={products.title} price={products.price} /> */}
    
      <About />
      <ProductList products={products}/>
      <ContactUs />
    
    {/* PASS THESE PARAMETERS(?)to productList */}

  {/*   <ul>{ products.map(product => <li key={product.id} >{product.title}{product.price}</li> )}</ul> */}

    
      
    </div>
  );
}

export default App;
