import './App.css';

function App() {
  const isShowData = true;
  return (
    <div className="App">    
    {isShowData == true ?  <h1>Showing emp Data</h1> : <h1>No data to show</h1>}
    {isShowData && <button>This is a button</button>}
      {/* <Job email="srikanth@gmail.com" salary="24LPA" position="SSA" company="INV"/>
      <Job email="Karunakar@gmail.com" salary="23LPA" position="ADE" company="BLS"/>
      <Job email="Shiva@gmail.com" salary="22LPA" position="ACE" company="CAP"/> */}
      
    </div>
  );
}

// const Job = (props) => {
//   return (
//     <div>

//       <h1>{props.email}</h1>
//       <h1>{props.position}</h1>
//       <h1>{props.salary}</h1>
//       <h1>{props.company}</h1>
//     </div>
//   )
// };

export default App;
