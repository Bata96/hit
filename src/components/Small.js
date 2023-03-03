import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Small() {
    const krugovi = 8;
    const index = useRef(Math.floor(Math.random() * krugovi));
    const boje = ["yellow", "blue", "lightgreen", "blue", "yellow", "blue", "yellow",   "lightgreen", "yellow", "red",
                  "yellow", "blue", "lightgreen", "blue", "yellow", "blue", "yellow",   "lightgreen", "yellow", "red",
                  "yellow", "blue", "lightgreen", "blue", "yellow", "blue", "yellow",   "lightgreen", "yellow", "red",
                  "yellow", "blue", "lightgreen", "blue", "yellow", "blue", "yellow",   "lightgreen", "yellow", "red",
                  "yellow", "blue", "lightgreen", "blue", "yellow", "blue", "yellow",   "lightgreen", "yellow", "red",
                  "yellow", "blue", "red",        "blue", "yellow", "blue", "yellow",   "lightgreen", "yellow", "red",
                  "yellow", "blue", "red",        "blue", "white",  "blue", "yellow",   "lightgreen", "yellow", "red",
                  "yellow", "blue", "red",        "blue", "yellow", "blue", "yellow",   "lightgreen", "yellow", "red",
                  "yellow", "blue", "red",        "blue", "yellow", "blue", "yellow",   "lightgreen", "yellow", "red",
                  "yellow", "blue", "red",        "blue", "yellow", "blue", "yellow",   "lightgreen", "yellow", "red"];
    const [score, setScore] = useState(0);
    const rez = useRef(0);
    const time = useRef(10);
    const [vreme, setVreme] = useState(10);
    const nivo = useRef(900);
    const [lvl, setLvl] = useState(1);

    const start = () => {
      const a = index.current;
      const t = time.current;
      index.current = Math.floor(Math.random() * krugovi);
      const element = document.getElementById(index.current);
      const element2 = document.getElementById(a);
      const again = document.getElementById("again");
      element2.style.backgroundColor = "";
      element.style.backgroundColor = boje[Math.floor(Math.random() * 99)];
      time.current = time.current - 1;
      setVreme(t);
      setTimeout(() => {
        if (time.current >= 0) {
          start();
        } else {
          if(localStorage.getItem("scoreS") < rez.current && localStorage.getItem("name") !== null) {
            localStorage.setItem("scoreS", rez.current);
          }
          element.style.backgroundColor = "";
          again.className = "again";
          console.log("Game Over!");
        }
      }, nivo.current)
    }

    const hit = (id) => {
        const clicked = document.getElementById(id);
        if (clicked.style.backgroundColor === "" && vreme > 0) {
          setScore(score);
          //time.current = time.current - 1;
          //setVreme(vreme - 1);
        } else if (clicked.style.backgroundColor === "white" && vreme > 0 ) {
          setScore(score);
          setVreme(vreme - 5);
          time.current = time.current - 5;
          clicked.style.backgroundColor = "";
        } else if (clicked.style.backgroundColor === "yellow" && score.toString().endsWith("9") === true && nivo.current <= 500 ) {
          setScore(score + 1);
          rez.current = score + 1;
          setVreme(vreme + 1);
          time.current = time.current + 1;
          clicked.style.backgroundColor = "";
          nivo.current = nivo.current - 10;
          setLvl(lvl + 1);
        } else if (clicked.style.backgroundColor === "blue" && score.toString().endsWith("9") === true && nivo.current <= 500 ) {
          setScore(score + 1);
          rez.current = score + 1;
          setVreme(vreme + 2);
          time.current = time.current + 2;
          clicked.style.backgroundColor = "";
          nivo.current = nivo.current - 10;
          setLvl(lvl + 1);
        } else if (clicked.style.backgroundColor === "lightgreen" && score.toString().endsWith("9") === true && nivo.current <= 500 ) {
          setScore(score + 1);
          rez.current = score + 1;
          setVreme(vreme + 3);
          time.current = time.current + 3;
          clicked.style.backgroundColor = "";
          nivo.current = nivo.current - 10;
          setLvl(lvl + 1);
        } else if (clicked.style.backgroundColor === "yellow" && score.toString().endsWith("9") === true && nivo.current <= 600 ) {
          setScore(score + 1);
          rez.current = score + 1;
          setVreme(vreme + 1);
          time.current = time.current + 1;
          clicked.style.backgroundColor = "";
          nivo.current = nivo.current - 30;
          setLvl(lvl + 1);
        } else if (clicked.style.backgroundColor === "blue" && score.toString().endsWith("9") === true && nivo.current <= 600 ) {
          setScore(score + 1);
          rez.current = score + 1;
          setVreme(vreme + 2);
          time.current = time.current + 2;
          clicked.style.backgroundColor = "";
          nivo.current = nivo.current - 30;
          setLvl(lvl + 1);
        } else if (clicked.style.backgroundColor === "lightgreen" && score.toString().endsWith("9") === true && nivo.current <= 600 ) {
          setScore(score + 1);
          rez.current = score + 1;
          setVreme(vreme + 3);
          time.current = time.current + 3;
          clicked.style.backgroundColor = "";
          nivo.current = nivo.current - 30;
          setLvl(lvl + 1);
        } else if (clicked.style.backgroundColor === "yellow" && score.toString().endsWith("9") === true ) {
          setScore(score + 1);
          rez.current = score + 1;
          setVreme(vreme + 1);
          time.current = time.current + 1;
          clicked.style.backgroundColor = "";
          nivo.current = nivo.current - 100;
          setLvl(lvl + 1);
        } else if (clicked.style.backgroundColor === "blue" && score.toString().endsWith("9") === true ) {
          setScore(score + 1);
          rez.current = score + 1;
          setVreme(vreme + 2);
          time.current = time.current + 2;
          clicked.style.backgroundColor = "";
          nivo.current = nivo.current - 100;
          setLvl(lvl + 1);
        } else if (clicked.style.backgroundColor === "lightgreen" && score.toString().endsWith("9") === true ) {
          setScore(score + 1);
          rez.current = score + 1;
          setVreme(vreme + 3);
          time.current = time.current + 3;
          clicked.style.backgroundColor = "";
          nivo.current = nivo.current - 100;
          setLvl(lvl + 1);
        } else if (clicked.style.backgroundColor === "yellow" && vreme > 0 ) {
          setScore(score + 1);
          rez.current = score + 1;
          setVreme(vreme + 1);
          time.current = time.current + 1;
          clicked.style.backgroundColor = "";
        } else if (clicked.style.backgroundColor === "blue" && vreme > 0 ) {
          setScore(score + 1);
          rez.current = score + 1;
          setVreme(vreme + 2);
          time.current = time.current + 2;
          clicked.style.backgroundColor = "";
        } else if (clicked.style.backgroundColor === "lightgreen" && vreme > 0 ) {
          setScore(score + 1);
          rez.current = score + 1;
          setVreme(vreme + 3);
          time.current = time.current + 3;
          clicked.style.backgroundColor = "";
        } else if (clicked.style.backgroundColor === "red" && vreme > 0 ) {
          setScore(score);
          setVreme(vreme - 1);
          time.current = time.current - 1;
          clicked.style.backgroundColor = "";
        }
      }

    const countdown = () => {
      const dugme = document.getElementById("dugme");
      const odbr = document.getElementById("odbrojavanje");
      const again = document.getElementById("again");
      if (odbr.innerText === "Start" || again.className === "again") {
        again.className = "again1";
        dugme.classList.replace("dugme1", "dugme");
        odbr.classList.remove("count");
        void odbr.offsetWidth;
        odbr.classList.add("count1");
        odbr.innerHTML = 3;
        setTimeout(() => {
          countdown();
        }, 1000)
      } else if (odbr.innerHTML === "3") {
        odbr.classList.remove("count1");
        void odbr.offsetWidth;
        odbr.classList.add("count1");
        odbr.innerText = 2;
        setTimeout(() => {
          countdown();
        }, 1000)
      } else if (odbr.innerHTML === "2") {
        odbr.classList.remove("count1");
        void odbr.offsetWidth;
        odbr.classList.add("count1");
        odbr.innerText = 1;
        setTimeout(() => {
          countdown();
        }, 1000)
      } else if (odbr.innerHTML === "1") {
        odbr.classList.remove("count1");
        void odbr.offsetWidth;
        odbr.classList.add("count1");
        odbr.innerText = "Go!";
        setTimeout(() => {
          countdown();
        }, 1000)
      } else {
        dugme.classList.replace("dugme", "dugme1");
        setTimeout(() => {
          start();
        }, 500)
      }
    }

    const playAgain = () => {
      setScore(0);
      time.current = 10;
      nivo.current = 900;
      setVreme(10);
      setLvl(1)
      countdown();
    }

    return (
      <div className="app">
          <div className="menu">
            <div className="container">
              <div className="dugme" id="dugme">
                <div className="start"><div id="odbrojavanje" className="count" onClick={countdown}>  Start</div></div>
              </div>
              <div className="again1" id="again">
                <div className="restart"><div className="playAgain" onClick={playAgain}>Play Again</div></div>
                <div className="restart"><Link className="link" to={"/"}><div className="playAgain">Menu</div></Link></div>
              </div>
              <div className='tableS'> 
                  <div className='krug' id='0'  onClick={()=>{hit("0")}} ></div>
                  <div className='krug' id='1'  onClick={()=>{hit("1")}} ></div>
                  <div className='krug' id='2'  onClick={()=>{hit("2")}} ></div>
                  <div className='krug' id='3'  onClick={()=>{hit("3")}} ></div>
                  <div className='krug' id='4'  onClick={()=>{hit("4")}} ></div>
                  <div className='krug' id='5'  onClick={()=>{hit("5")}} ></div>
                  <div className='krug' id='6'  onClick={()=>{hit("6")}} ></div>
                  <div className='krug' id='7'  onClick={()=>{hit("7")}} ></div>
                  <div className='krug' id='8'  onClick={()=>{hit("8")}} ></div>
              </div>
            </div>
            <div className='rezultat'>
                <div>Score: {score}</div>
                <div>Lvl: {lvl}</div>
                <div>Chance: {vreme}</div>
            </div>
          </div>
        </div>
); }