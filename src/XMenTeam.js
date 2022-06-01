import blueTeam from "./blueTeam";

const XMenTeam = () => {
  return (
    <section className="x-men-team">
      <h1>BLUE TEAM</h1>
      <div className="team-member-card">
        <img src={blueTeam[0].cardImageURL} alt={blueTeam[0].name} />
        <div>
          <big>Codename: </big>
          <span>{blueTeam[0].name}</span>
        </div>
        <div>
          <big>Real Name: </big>
          <span>{blueTeam[0].realName}</span>
        </div>
        <div>
          <big>Powers: </big>
          <span>{blueTeam[0].powers.join(", ")}</span>
        </div>
        <div>
          <big>Team Role: </big>
          <span>{blueTeam[0].teamRole}</span>
        </div>
        <div>
          <big>Height: </big>
          <span>
            {blueTeam[0].heightFeet}'{blueTeam[0].heightInches}"
          </span>
        </div>
        <div>
          <big>Weight: </big>
          <span>{blueTeam[0].weight} lbs</span>
        </div>
        <div>
          <big>Eye Color: </big>
          <span>{blueTeam[0].eyeColor}</span>
        </div>
        <div>
          <big>Hair Color: </big>
          <span>{blueTeam[0].hairColor}</span>
        </div>
      </div>
      <div className="hero-lineup">
        {blueTeam.map((member) => {
          return (
            <div className="team-member">
              <img src={member.imageURL} alt={member.name} height="300" />
              <h5>{member.name}</h5>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default XMenTeam;
