import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Profile({text, setText}) {

    useEffect(() => {
        const profil = document.getElementById("nalog");
        const create = document.getElementById("create");
        if(localStorage.getItem("name") === null ) {
            profil.className = "nalog1";
        } else {
            profil.className = "nalog";
            create.className = "create1";
        }
    }, [])

    const submit = () => {
        if ( text !== "") {
            localStorage.setItem("name", text);   
        }
    }

    const yourName = (e) => {
        setText(e.target.value);
    }

    const remove = () => {
        localStorage.removeItem("name");
        localStorage.removeItem("scoreS");
        localStorage.removeItem("scoreN");
        localStorage.removeItem("scoreL");
        window.location.reload();
    }

    return (
        <div>
            <div className="menu">
                <div className="profile">
                    <div className="nalog1" id="nalog">
                        <div className="ime"><b>{localStorage.getItem("name")}</b></div>
                        <div>Best Score:</div>
                        <div> S: {localStorage.getItem("scoreS")}</div>
                        <div> N: {localStorage.getItem("scoreN")}</div>
                        <div> L: {localStorage.getItem("scoreL")}</div>
                    </div>
                    <form className="create" id="create">
                        <h3>Create profile:</h3>
                        <div><input type="text" placeholder="Enter your name" value={text} onChange={yourName} required></input></div>
                        <button type="submit" onClick={submit}>Submit</button>
                    </form>
                    <div className="delete" onClick={remove} >Delete</div>
                    <Link className="link" to={"/"}><div className="back">Back</div></Link>
                </div>
            </div>
        </div>
    );
}