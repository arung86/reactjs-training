import React from "react";

const teams = ["RCB", "MI", "SRH", "KKR", "CSK"];

const iplTeams = [
  {
    id: 1,
    name: "RCB",
    captain: "Kohli",
  },
  {
    id: 2,
    name: "MI",
    captain: "Rohit",
  },
  {
    id: 3,
    name: "SRH",
    captain: "Warner",
  },
];

const item = <li>{teams[0]}</li>;

// const items = [<li>{teams[0]}</li>, <li>{teams[1]}</li>, <li>{teams[2]}</li>];
// 10 items

// array map

//

// const listTeams = teams.map((team) => <li>{team}</li>);

/* 
const Team = ({ team }) => {
  //   console.log(key);
  return (
    <li>
      ID: {team.id}, Name: {team.name}, Captain: {team.captain}
    </li>
  );
};

const TeamX = () => {
  return <li>Team</li>;
}; // explicit impl

const Teamx = () => (
  <div>
    <li>team</li>
  </div>
);

const Teamx = () => {
 
    console.log(key);
    function add() {
        
    }

  return (
    <div>
      <li>team</li>
    </div>
  );
};

*/

const listTeams = iplTeams.map((team) => <Team key={team.id} team={team} />);

console.log(listTeams);

export default function ListComp() {
  return (
    <ul>
      {/* <ol>{items}</ol> */}
      {listTeams}
    </ul>
  );
}
