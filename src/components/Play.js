import { Link } from "react-router-dom";

export default function Play() {
    return (
        <div>
            <div className="menu">
                <div className="play">
                    <Link className="link" to={"/Small"}><div>Small</div></Link>
                    <Link className="link" to={"/Normal"}><div>Normal</div></Link>
                    <Link className="link" to={"/Large"}><div>Large</div></Link>
                    <Link className="link" to={"/"}><div>Back</div></Link>
                </div>
            </div>
        </div>
    );
}