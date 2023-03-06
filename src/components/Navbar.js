import { NavLink } from 'react-router-dom';
import styles from 'styles/Navbar.module.css';
import cx from 'classnames';
import Logo from './Logo';

const Navbar = () => {
  const navlinks = [
    { path: '/', text: 'rockets' },
    { path: '/missions', text: 'missions' },
    { path: '/profile', text: 'profile' },
  ];
  return (
    <nav className={styles.navbar_container}>
      <div className={cx(styles.navbar, styles.navbar)}>
        <div className={styles.navbar__content}>
          <Logo className={styles.navbar_title} />
          <ul className={styles.navbar__list}>
            {navlinks.map((navlink) => (
              <li key={navlink.text}>
                <NavLink to={navlink.path} style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : '' })}>{navlink.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
