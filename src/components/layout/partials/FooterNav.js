import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="https://calendly.com/parthchugh/30min?back=1" target="_blank">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;