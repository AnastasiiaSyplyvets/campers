import styles from '../Camper/Camper.module.css';
import sprite from '../../assets/sprite.svg';
import css from './Modal.module.css';

import { useState } from 'react';
import { Features } from '../Modal/Features';
import { Reviews } from '../Modal/Reviews';

export const CamperModal = ({ camper }) => {
  const [activeTab, setactiveTab] = useState();
  //   const [active, isActive] = useState(false);

  const ratingCount = (reviews) => {
    let total = 0;
    for (let i = 0; i < reviews.length; i += 1) {
      total += reviews[i].reviewer_rating;
    }
    return total / reviews.length;
  };
  const chooseActiveTab = (e) => {
    setactiveTab(e.target.name);
  };

  return (
    <div className={css.modal}>
      <p>{camper.name}</p>
      <div className={styles.camperInfo}>
        <p>
          <svg width="16px" height="16px">
            <use xlinkHref={sprite + '#icon-star'}></use>
          </svg>
          {ratingCount(camper.reviews)} ( {camper.reviews.length} Rewiews)
        </p>
        <div className={styles.locationInfo}>
          <svg width="12px" height="14px" fill="#101828" stroke="#ffffff">
            <use xlinkHref={sprite + '#icon-map-pin-1'}></use>
          </svg>
          <p>{camper.location}</p>
        </div>
      </div>
      <p>&euro; {camper.price}</p>
      <ul className={css.imgList}>
        <li>
          <img
            className={css.galleryImg}
            width="290px"
            height="310px"
            src={camper.gallery[0]}
          ></img>
        </li>
        <li>
          <img
            className={css.galleryImg}
            width="290px"
            height="310px"
            src={camper.gallery[1]}
          ></img>
        </li>
        <li>
          <img
            className={css.galleryImg}
            width="290px"
            height="310px"
            src={camper.gallery[2]}
          ></img>
        </li>
      </ul>
      <p className={styles.camperDescr}>{camper.description}</p>
      <div>
        <ul className={css.tabUl}>
          <li>
            {/* <button
              id="tabBtn"
              className={css.tabBtn}
              onClick={chooseActiveTab}
              name="features"
              type="button"
            >
              Features
            </button> */}

            <a className={css.tabBtn} onClick={chooseActiveTab} name="features">
              Features
            </a>
          </li>
          <li>
            <a className={css.tabBtn} onClick={chooseActiveTab} name="reviews">
              Reviews
            </a>
            {/* id="tabBtn"
              className={css.tabBtn}
              onClick={chooseActiveTab}
              name="reviews"
              type="button"
            > */}

            {/* </button> */}
          </li>
        </ul>
        <div>
          {activeTab === 'features' ? <Features camper={camper} /> : null}
          {activeTab === 'reviews' ? <Reviews camper={camper} /> : null}
        </div>
      </div>
    </div>
  );
};
