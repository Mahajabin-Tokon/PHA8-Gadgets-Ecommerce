import { Link, useNavigate } from "react-router-dom";

const Card = ({product}) => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={product.product_image} alt="Product image" className="rounded-xl w-11/12 h-40 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.product_title}</h2>
          <p>Price: {product.price}</p>
          <div className="card-actions">
            <Link to={`/details/${product.product_id}`}><button className="btn bg-white border-2 border-purple-400 rounded-3xl text-purple-400">View Details</button></Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
