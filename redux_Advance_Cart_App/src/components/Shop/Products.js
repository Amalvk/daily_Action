//Center data store & product display 

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS=[{
                      id:'p1',
                      price :6,
                      title:'My first Book',
                      Decription: 'The first book i ever wrote'
                      },
                      {
                        id:'p3',
                      price :5,
                      title:'My second Book',
                      Decription: 'The last '},]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map ((product)=>
        <ProductItem
        
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description} />
        )}

       
      </ul>
    </section>
  );
};

export default Products;
