import React from 'react';

function Card(props) {
  return (
    <React.Fragment>
      <article className="article">
        <h3>{props.data.name}</h3>
        <div>Code: {props.data['alpha_two_code']}</div>
        <div>Country: {props.data.country}</div>
        <div>Website: <a href={props.data.web_pages}>Link</a></div>
      </article>
    </React.Fragment>
  );
}

export default Card;