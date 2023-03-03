import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div>
            <div className="menu">
                <div className="home">
                    <Link className="link" to={"/Play"}><div>Play</div></Link>
                    <Link className="link" to={"/Profile"}><div>Profile</div></Link>
                    <Link className="link" to={"/Rules"}><div>Rules</div></Link>
                </div>
            </div>
        </div>
    );
}