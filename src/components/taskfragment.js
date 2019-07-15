import React from 'react';

function Task(props){
  return(
    <div key={props.data.id}>
    <ul>
    <li>{props.data.title}</li>
    <li>Task Description: {props.data.description}</li>
    <li id={props.data.id}> Status {props.data.status}</li>
    <li>{props.data.assignee ? <p>Assignee: {props.data.assignee}</p> : 'Unassigned'}</li>  
    <li><img src={props.data.resizedPic} alt="Icon Pic"></img></li>
    <li><img src={props.data.pic} alt="Submitted Pic"></img></li>
    </ul>
    <form action={`${props.taskmasterSix}/tasks/${props.data.id}/images`} method="post" enctype="multipart/form-data">
        <label>
          <span>Upload An Image</span>
          <input name="file" type="file" />
        </label>
        <button>Save</button>
      </form>
    </div>
  )
}

export default Task;