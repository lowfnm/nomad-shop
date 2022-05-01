import { Link } from 'react-router-dom';
import classNames from 'classnames';

import style from './header.module.scss';

import CartIcon from '../cart-icon';
import shopImg from '../../../assets/shopping_bag.png';

const Header = () => {
  const iconsList = [{ id: 1, img: shopImg, imgAlt: 'ShopIcon', count: 5 }];

  return (
    <header>
      <nav className={classNames(style.navMenu, 'container')}>
        <div className="logo">
          <Link to="/">NOMAD</Link>
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
        {iconsList.map(icon => (
          <CartIcon key={icon.id} img={icon.img} imgAlt={icon.imgAlt} count={icon.count} />
        ))}
      </nav>
    </header>
  );
};

export default Header;
