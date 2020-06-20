import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import { connect } from 'react-redux';
import { gravatar } from '../utils/gravatar';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import { logoutRequest } from '../actions';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const imagePorfile = gravatar(user.email || '');
  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <img className='header__img' src={logo} alt='Platzi Video' />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ? (
            <Link to='/'>
              <img src={imagePorfile} alt='' />
            </Link>
          ) : (
            <Link to='/'>
              <img src={userIcon} alt='' />
            </Link>
          )}
          {hasUser ? <p>{user.email}</p> : <p>Perfil</p>}
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href='#logout' onClick={handleLogout}>
                Cerrar Sesion
              </a>
            </li>
          ) : (
            <li>
              <Link to='/login'>Iniciar Sesion</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};
const mapDispatchToProps = {
  logoutRequest,
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default Header;
