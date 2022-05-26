<>
  <div className="navbarWoman">
    <div className="navbarMainTitle">WOMEN</div>
    <div className="navbarWomanAlign">
      {NAVBAR_LIST.map(list => {
        return (
          <div className="NavbarDropdown" key={list.id}>
            {list.list.map(text => {
              return <div key={text}>{text}</div>;
            })}
          </div>
        );
      })}
    </div>
  </div>
  <div className="navbarMan">
    <div className="navbarMainTitle">MEN</div>
    <div className="navbarManAlign">
      {NAVBAR_MENLIST.map(list => {
        return (
          <div className="NavbarDropdown" key={list.id}>
            {list.list.map(text => {
              return <div key={text}>{text}</div>;
            })}
          </div>
        );
      })}
    </div>
  </div>
  <div className="navbarAccessories">
    <div className="navbarMainTitle">ACCESSORIES</div>
    <div className="navbarAccessoriesAlign">
      {NAVBAR_ACCESSORIESLIST.map(list => {
        return (
          <div className="NavbarDropdown" key={list.id}>
            {list.list.map(text => {
              return <div key={text}>{text}</div>;
            })}
          </div>
        );
      })}
    </div>
  </div>
</>;
