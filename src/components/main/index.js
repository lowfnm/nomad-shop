import { useNavigate } from 'react-router';

import style from './main.module.scss';

import studio from '../../assets/studio.jpeg';

const Main = () => {
  let navigate = useNavigate();

  return (
    <section className={style.mainSectionContainer}>
      <div className={style.mainSectionMiddle}>
        <div className={style.mainImage}>
          <img src={studio} alt="studio" />
        </div>
        <div className={style.description}>
          <h2>Designed for fashion. Crafted for sport.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cupiditate debitis delectus deserunt
            ex impedit in iste minus quam quo repudiandae suscipit, veniam voluptates!
          </p>
          <button className="button is-black" id="shop-now" onClick={() => navigate('/product/1')}>
            Studio bag
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
