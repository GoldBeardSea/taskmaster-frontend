import React, {useState, useEffect, Fragment} from 'react';
import Task from './components/taskfragment.js'
import './css/app.css';


function App() {
  const taskmasterSix = 'http://taskmasterSix.us-east-2.elasticbeanstalk.com';
  // insert a working link to a taskmaster server and it does pull, currently having issues with my objects. 

  const [tasks, setTasks] = useState([]);

  const _getTasks = () => {
    fetch( `${taskmasterSix}/tasks`, {mode: 'cors', method: 'GET'})
    .then( data => data.json())
    .then( task => setTasks(task))
    .catch( console.error);
  };

  useEffect(_getTasks, []);

  return (
    <Fragment>
      <header>
        <h1>Task Master Six Server Tasks</h1>
      </header>
      <main>
        <div>
          {tasks.map(task => 
          <Task data={task} taskmasterSix={taskmasterSix} />
          )}
        </div>
      </main>
    </Fragment>
  );
}

export default App;