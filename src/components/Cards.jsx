import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const Cards = () => {
  const { type } = useParams();
  const data = useLoaderData();
  console.log(data);
  const arr = [1, 2, 3];

  return (
    <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 gap-2 p-2 mb-10">
      
      {data.map((eachdata) => (
        <Card key={eachdata.product_id} product={eachdata} />
      ))}
      
    </div>
  );
};

export default Cards;

{
  /* <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={data.product_image} alt="Product image" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>; */
}
