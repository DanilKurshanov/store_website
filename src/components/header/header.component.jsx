import './header.styled.css';


const HeaderComponent = () => {
  return (
      <header>
          <nav>
              <span className="logo">House Staff</span>
              <ul className={'menu'}>
                  <li>Про нас</li>
                  <li>Кабинет</li>
                  <li>Меню</li>
              </ul>
          </nav>
          <div className="presentation">
          </div>
      </header>
  );
}

export default HeaderComponent;