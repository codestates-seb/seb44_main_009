import OrderProductItem from "./OrderProductItem";

const OrderProductList = ({ products }) => {
  return (
    <>
      {products.map(product => (
        <OrderProductItem
          key={product.productId}
          name={product.productName}
          price={product.productPrice}
          quantity={product.quantity}
        />
      ))}
    </>
  );
};

export default OrderProductList;
