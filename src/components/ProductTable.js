import React from 'react';
import ProductRow from './ProductRow'

class ProductTable extends React.Component {
    render(){
        return( 
            <div>
                <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {this.props.filteredProducts.map((product) => {
                        return (
                       <ProductRow key={product.id} {...product} />   
                        )
                    })}
                </tbody>
                
</table>
</div>
        )}
}

export default ProductTable;