import { useDispatch } from 'react-redux';

import { fetchCamperList } from '../../redux/operations';
import { Camper } from '../../components/Camper/Camper';

import sprite from '../../assets/sprite.svg';
import styles from '../CatalogPage/CatalogPage.module.css';
const CatalogPage = () => {
  const dispatch = useDispatch();

  dispatch(fetchCamperList());
  return (
    <section>
      <div>
        <div className={styles.locationContainer}>
          <label htmlFor="location">Location</label>
          <svg
            className={styles.locationSvg}
            fill="#101828"
            stroke="#ffffff"
            width="18px"
            height="20px"
          >
            <use xlinkHref={sprite + '#icon-map-pin-1'}></use>
          </svg>
          <input
            className={styles.locationInput}
            id="location"
            placeholder="Kyiv, Ucraine"
          ></input>
        </div>

        <div className={styles.container}>
          <h3 className={styles.title}>Filters</h3>
          <ul className={styles.list}>
            <li>
              <button className={styles.camperBtn}>
                <svg width="95px" height="95px">
                  <use xlinkHref={sprite + '#icon-Vertical-container'}></use>
                </svg>
              </button>
            </li>
            <li>
              <button className={styles.camperBtn}>
                <svg width="95px" height="95px">
                  <use xlinkHref={sprite + '#icon-Horizontal-container'}></use>
                </svg>
              </button>
            </li>
            <li>
              <button className={styles.camperBtn}>
                <svg width="95px" height="95px">
                  <use
                    xlinkHref={sprite + '#icon-Horizontal-container-1'}
                  ></use>
                </svg>
              </button>
            </li>
            <li>
              <button className={styles.camperBtn}>
                <svg width="95px" height="95px">
                  <use xlinkHref={sprite + '#icon-Container'}></use>
                </svg>
              </button>
            </li>
            <li>
              <button className={styles.camperBtn}>
                <svg width="95px" height="95px">
                  <use xlinkHref={sprite + '#icon-Container-1'}></use>
                </svg>
              </button>
            </li>
          </ul>
          <h3 className={styles.title}>Vehicle type</h3>
          <ul className={styles.list}>
            <li>
              <button className={styles.camperBtn}>
                <svg width="95px" height="95px">
                  <use xlinkHref={sprite + '#icon-Button-container'}></use>
                </svg>
              </button>
            </li>
            <li>
              <button className={styles.camperBtn}>
                <svg width="95px" height="95px">
                  <use xlinkHref={sprite + '#icon-Button-container-1'}></use>
                </svg>
              </button>
            </li>
            <li>
              <button className={styles.camperBtn}>
                <svg width="95px" height="95px">
                  <use xlinkHref={sprite + '#icon-Button-container-2'}></use>
                </svg>
              </button>
            </li>
          </ul>
          <button className={styles.searchBtn}>Search</button>
        </div>
      </div>
      <div>
        <Camper />
      </div>
    </section>
  );
};

export default CatalogPage;
