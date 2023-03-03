import { Link } from "react-router-dom";

export default function Rules() {
    return (
        <div>
            <div className="menu">
                <div className="rules">
                    <h2>Rules:</h2>
                    <h3>Score:</h3>
                    <p>Yellow = +1 score.</p>
                    <p>Blue = +1 score.</p>
                    <p>Green = +1 score.</p>
                    <p>After every 10 points speed will increase.</p>
                    <h3>Chance:</h3>
                    <p>Yellow = +1 chance.</p>
                    <p>Blue = +2 chance.</p>
                    <p>Green = +3 chance.</p>
                    <p>Red = -1 chance.</p>
                    <p>Black = -5 chance.</p>
                    <p>When you lose all chances it's game over.</p>
                    <Link className="link" to={"/"}><div>Back</div></Link>
                </div>
            </div>
        </div>
    );
}