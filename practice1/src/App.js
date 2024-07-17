import './App.css';
import { User } from './user';
import { Planet } from './planet';

function App() {
  const users = [
                {name: "srikanth", age: 31},
                {name: "varshika", age: 31},
                {name: "baby", age: 1},
  ];
  const planets = [
    {planet: "uranus", isGasPlanet: true},
    {planet: "pluto", isGasPlanet: false},
    {planet: "neptune", isGasPlanet: true},
    {planet: "saturn", isGasPlanet: false},
    {planet: "jupiter", isGasPlanet: true},
    {planet: "venus", isGasPlanet: true},
];

  return (
    <div className="App">  
    {users.map((user, key) => {
    return <User key={key} name={user.name} age={user.age} />
    }) } 
    {planets.map((planet, key) => {
      return <Planet key={key} name={planet.planet} isGas={planet.isGasPlanet} />
    })}
    </div>
  );
}


export default App;
