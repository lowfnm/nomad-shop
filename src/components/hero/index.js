import classNames from 'classnames';

import style from './hero.module.scss';

const Hero = () => {
  return (
    <section className={classNames(style.heroImage, 'hero is-large is-info hero-image')}>
      <div className={classNames(style.heroContainer, 'hero-body')}>
        <p className="title">Bags reimagined for modern life.</p>
        <div className="shop-now-btn">
          <button className="button is-black" id="shop-now">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
