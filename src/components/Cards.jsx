import { useLoaderData, useParams } from "react-router-dom";

const Cards = () => {
    const {type} = useParams()
    const data = useLoaderData()

    return (
        <div>
            {type}
        </div>
    );
};

export default Cards;