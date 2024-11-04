import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards = () => {
  const { type } = useParams();
  const data = useLoaderData();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    if (type) {
      if (type === "All") {
        setProducts(data);
      } else {
        const filteredData = [...data].filter(
          (dataElement) => dataElement.category === type
        );
        setProducts(filteredData);
      }
    } else {
      setProducts(data);
    }
  }, [data, type]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 mb-10">
      {product.map((eachdata) => (
        <Card key={eachdata.product_id} product={eachdata} />
      ))}
    </div>
  );
};

export default Cards;

