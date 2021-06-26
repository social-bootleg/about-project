import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          <h2>We współpracy z BluSoft.</h2>
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Kontakt</h2>
            <Link to={{ pathname: "https://www.blusoft.pl" }} target='_blank'>Strona internetowa</Link>
            <Link to={{ pathname: "https://www.blusoft.pl/Kontakt" }} target='_blank'>Mail i Infolinia</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={{ pathname: "https://www.facebook.com/ePulpit24/?__xts__[0]=68.ARCes_Jq8uW50GYV6msBDEU-xUgXppoRMl9Kilgt4z9KY3jVzbDWLmPUgslZ1zJ1wTbCBH_fR-lxI8z3tSMLgeS1o84BwZ0RNDoVYioz3WrGnqkzSUErzrNWRiL0jSyRnoumc2Xxp6uw" }} target='_blank'>Facebook</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/stronaglowna' className='social-logo'>
              Social Bootleg
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Social Bootleg © | 2021 </small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{ pathname: "https://www.facebook.com/ePulpit24/?__xts__[0]=68.ARCes_Jq8uW50GYV6msBDEU-xUgXppoRMl9Kilgt4z9KY3jVzbDWLmPUgslZ1zJ1wTbCBH_fR-lxI8z3tSMLgeS1o84BwZ0RNDoVYioz3WrGnqkzSUErzrNWRiL0jSyRnoumc2Xxp6uw" }}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;