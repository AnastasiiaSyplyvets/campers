import img from '../../assets/sparen-voor-jouw-droomreis-spaarpotje-maken-droomreis-231279533.jpg';
import sprite from '../../assets/sprite.svg';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
export const HomePage = () => {
  return (
    <div>
      <h1 className={styles.titlePage}>Find camper of your dream</h1>

      <div className={styles.wrap}>
        <img
          className={styles.mainImg}
          src={img}
          alt="camper in the mountins"
          width="700"
        />
        <div>
          <p className={styles.text}>
            Embark on your dream journey with the perfect camper by your side!
            Our webpage offers an unparalleled selection of campers tailored to
            meet your every need. Whether you're seeking adventure in the
            mountains, relaxation by the beach, or a road trip across the
            country, we've got you covered.
          </p>
          <p className={styles.text}>
            So why wait? Start your journey today and discover the camper of
            your dreams. With our webpage, your next adventure awaits!
          </p>
        </div>
      </div>
      <Link to="/catalog" className={styles.mainBtn}>
        Find camper
        <svg width="32px" height="32px">
          <use xlinkHref={sprite + '#icon-camper'}></use>
        </svg>
      </Link>
    </div>
  );
};
