import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <div className="nav">
                <Link className="link" to={"/"}><div className="title">Hit Color</div></Link>
            </div>
        </div>
    );
}