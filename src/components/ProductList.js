import Product from "./Product";

const ProductList = (props) => {
  const { products, onAdd } = props;

  if (products)
    return (
      <div>
        {products.map((p) => (
          <Product
            key={p.id}
            id={p.id}
            smallImagePath={p.smallImagePath}
            name={p.name}
            price={p.price}
            description={p.description}
            onAdd={onAdd}
          />
        ))}
      </div>
    );

  return <div>Nothing yet...</div>;
};

export default ProductList;
