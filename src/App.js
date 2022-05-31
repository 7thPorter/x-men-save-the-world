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
            <div>
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
      <hr />
      <h2>Professor X, call in your team!</h2>
      <img
        src="https://i.pinimg.com/originals/0d/76/0c/0d760ca92cae02f312e999911fcf3e2f.png"
        alt="Professor X from the X-Men"
        height="300"
      />
      <XMenTeam />
    </main>
  );
}

export default App;
