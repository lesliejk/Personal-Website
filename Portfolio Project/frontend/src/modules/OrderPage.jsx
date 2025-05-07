import OrderRow from './OrderRow.jsx'

function OrderPage({products}){
    return (
        <>
            <h2>Order Pet Products</h2>
            <article>
                <p></p>
                <table id="order">
                    <caption>Current Products (Limit 10)</caption>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            {/* <th>Subtotal</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) =>
                            <OrderRow
                                product={product}
                                key={i}
                            />)}
                    </tbody>
                    {/* <tfoot>
                        <tr>
                            <th colSpan="3">Running Total

                            </th>
                        </tr>
                    </tfoot> */}
                </table>
            </article>
        </>
    )
}
export default OrderPage;