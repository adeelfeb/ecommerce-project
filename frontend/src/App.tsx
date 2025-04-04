

import './App.css'
import { sampleProducts } from './data'

function App() {
  

  return (
    <>
     <head>Amzaon Clone</head>
     <main>
      <p>Temp website has been loaded</p>
      <img src="https://placehold.co/600x400" alt="product-image" className="product-image" />

      <ul>
      {sampleProducts.map(product=> (
        <li key={product.slug}>
          <h2>{product.name}</h2>
          <h3>Price: ${product.price} </h3>
          <img src={product.image} alt="product-image" className='product-image' />
          

        </li>
        ))}
      </ul>
     </main>
     <footer>Copy Right reserved</footer>
    </>
  )
}

export default App
