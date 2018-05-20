import React from 'react';

const CampusCard = (props) => {
  const studentCount = props.campus.students.length;
  return (
    <div className="column column-50">
      <div className="campus-card clearfix">
        <div className="row">

          <div className="column column-50">
            <img src={props.campus.imageUrl} />
          </div>

          <div className="column column-50">
            <a href="#">{props.campus.name}</a>
            <p>{studentCount} student{studentCount > 1 && 's'}</p>

            <div className="actions">
              <button type="button" className="button button-outline">Edit Campus</button>
              <input className="button button-clear" type="submit" value="Delete" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CampusCard
