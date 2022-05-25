import React from 'react';
import './SecondNavDropdown.scss';
// import { NAVBAR_LIST } from './NavbarData';

const SecondNavDropdown = () => {
  return (
    <div className="navbarWoman">
      {NAVBAR_LIST.map(({id, title, category}) => {
        return (
          <div className="navbarMainTitle" key={id}>
            {title}
          </div>
          <div className="navbarWomanAlign">
            {category.map(list => {
          return (
            <div className="NavbarDropdown" key={list.id}>
              {list.list.map(text => {
                return <div key={text}>{text}</div>;
              })}
            </div>            
        );
      })}
      </div>);
      )
  );
};

export default SecondNavDropdown;
