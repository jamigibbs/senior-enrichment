import React from 'react';

const CampusCard = (props) => {
  const studentCount = props.campus.students.length;
  return (
    <div className="column column-50">
      <div className="campus-card clearfix">
        <img className="float-left" src={props.campus.imageUrl} height="150" />
        <a href="#">{props.campus.name}</a>
        <p>{studentCount} student{studentCount > 1 && 's'}</p>
        <button type="button" className="button button-outline">Edit Campus</button>
        <input className="button button-clear" type="submit" value="Delete" />
      </div>
    </div>
  )
}

export default CampusCard
