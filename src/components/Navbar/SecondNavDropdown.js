import React, { useState } from 'react';
import './SecondNavDropdown.scss';
import { NAVBAR_LIST } from './NavbarData';

const SecondNavDropdown = () => {
  const [currentMenuId, setCurrentMenuId] = useState();

  return (
    <div className="SecondNavDropdown">
      {NAVBAR_LIST.map(({ id, title, classname, category }) => {
        return (
          <div
            className="navbarDropdownWrapper"
            key={id}
            onMouseEnter={() => setCurrentMenuId(id)}
            onMouseLeave={() => setCurrentMenuId()}
          >
            <div className="navbarMainTitle">{title}</div>
            <div className={classname}>
              {id === currentMenuId &&
                category.map(({ id, list }) => (
                  <div className="NavbarDropdown" key={id}>
                    {list.map(text => {
                      return (
                        <div className="categoryValue" key={text}>
                          {text}
                        </div>
                      );
                    })}
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SecondNavDropdown;
