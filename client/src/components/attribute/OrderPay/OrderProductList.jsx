import OrderProductItem from "./OrderProductItem";

const OrderProductList = ({ products }) => {
  const shuffleArray = array => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledProducts = shuffleArray(products);

  const randomProducts = shuffledProducts.slice(0, 3);

  return (
    <>
      {randomProducts.map((product, index) => (
        <OrderProductItem
          key={index}
          url={product.url}
          name={product.name}
          price={product.price}
          color={product.color}
          count={product.count}
          size={product.size}
          personalColor={product.personalColor}
        />
      ))}
    </>
  );
};

export default OrderProductList;
