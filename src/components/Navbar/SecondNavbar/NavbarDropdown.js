import React, { useState } from 'react';
import { NAVBAR_LIST } from './NavbarData';
import './NavbarDropdown.scss';

const NavbarDropdown = () => {
  const [currentMenuId, setCurrentMenuId] = useState('');

  return (
    <div className="navbarDropdown">
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
                  <div className="dropdown" key={id}>
                    {list.map(text => (
                      <div className="categoryValue" key={text}>
                        {text}
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NavbarDropdown;
