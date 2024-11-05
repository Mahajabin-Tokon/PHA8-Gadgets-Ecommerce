import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center gap-5 p-5 m-5 text-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Error Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-3xl">Sorry, this page does not exist</h1>

      <Link to="/" className="btn">
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
