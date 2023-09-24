import { Link } from "react-router-dom";


const ErrorHandler = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <h1 className="text-5xl">OPPS!!!</h1>
            <Link to='/'>Go To Home</Link>
        </div>
    );
};

export default ErrorHandler;