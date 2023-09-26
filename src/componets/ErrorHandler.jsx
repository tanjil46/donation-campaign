import { Link } from "react-router-dom";


const ErrorHandler = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="space-y-4 ">
            <h1 className="text-5xl text-red-500">404 NO DATA FOUND</h1>
            <Link className="btn btn-error" to='/'>Go To Home</Link>

            </div>
        </div>
    );
};

export default ErrorHandler;