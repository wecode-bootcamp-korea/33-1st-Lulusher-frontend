import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                    {list.map(({ id, link, menu }) => (
                      <Link key={id} to={link} className="link">
                        <div className="categoryValue">{menu}</div>
                      </Link>
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
