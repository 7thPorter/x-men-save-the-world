import "./App.css";

import XMenTeam from "./XMenTeam";
import villains from "./villains";

function App() {
  return (
    <main>
      <h1>
        Oh no!! The evilest supervillains are combining to take over the world!
        Only the X-Men stand in their way!
      </h1>
      <section>
        {villains.map((villain) => {
          return (
            <div key={villain.name}>
              <img
                src={villain.imageURL}
                alt={villain.name}
                height="300"
                className={
                  villain.name === "Mister Sinister" ||
                  villain.name === "Juggernaut"
                    ? "flipped"
                    : ""
                }
              />
              <h5>{villain.name}</h5>
            </div>
          );
        })}
      </section>
        <div className="domination-bar">
          <span className="dom-completion" style={{width: "0%"}}>
            <span className="dom-words">World Domination</span>
          </span>
        </div>
        <div className="health-bar">
          <span className="hp-depletion" style={{width: "100%"}}>
            <span className="hp-words">Villainous Hit Points</span>
          </span>
        </div>
      <br />
      <XMenTeam />
    </main>
  );
}

export default App;
