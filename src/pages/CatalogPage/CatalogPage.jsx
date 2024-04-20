import { useDispatch } from 'react-redux';

import { fetchCamperList, filterCampers } from '../../redux/operations';
import { Camper } from '../../components/Camper/Camper';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import sprite from '../../assets/sprite.svg';
import styles from '../CatalogPage/CatalogPage.module.css';
const CatalogPage = () => {
  const campers = useSelector((state) => state.campers);
  const [page, setPage] = useState(1);

  // console.log(campers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamperList(page));
  }, [page, dispatch]);

  const handleLoadMoreBtn = () => {
    setPage(page + 1);
  };

  const handleCheckbox = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    dispatch(filterCampers(value));
  };

  return (
    <section className={styles.catalogSection}>
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
              <label htmlFor="airConditioner" className={styles.camperBtn}>
                <input
                  onClick={handleCheckbox}
                  className={styles.inputCheckBox}
                  type="checkbox"
                  id="airConditioner"
                  name="airConditioner"
                  value="airConditioner"
                ></input>
                <svg width="95px" height="95px">
                  <use xlinkHref={sprite + '#icon-Vertical-container'}></use>
                </svg>
              </label>
            </li>
            <li>
              <label htmlFor="automatic" className={styles.camperBtn}>
                <input
                  onClick={handleCheckbox}
                  type="checkbox"
                  id="automatic"
                  name="automatic"
                  value="automatic"
                  className={styles.inputCheckBox}
                />
                <svg width="95px" height="95px">
                  <use xlinkHref={sprite + '#icon-Horizontal-container'}></use>
                </svg>
              </label>
            </li>
            <li>
              <label htmlFor="kitchen" className={styles.camperBtn}>
                <input
                  type="checkbox"
                  name="kitchen"
                  id="kitchen"
                  value="kitchen"
                  className={styles.inputCheckBox}
                  onClick={handleCheckbox}
                />
                <svg width="95px" height="95px">
                  <use
                    xlinkHref={sprite + '#icon-Horizontal-container-1'}
                  ></use>
                </svg>
              </label>
            </li>
            <li>
              <label htmlFor="TV" className={styles.camperBtn}>
                <input
                  type="checkbox"
                  id="TV"
                  name="TV"
                  value="TV"
                  className={styles.inputCheckBox}
                  onClick={handleCheckbox}
                />
                <svg width="95px" height="95px">
                  <use xlinkHref={sprite + '#icon-Container'}></use>
                </svg>
              </label>
            </li>
            <li>
              <label htmlFor="toilet" className={styles.camperBtn}>
                <input
                  type="checkbox"
                  name="toilet"
                  id="toilet"
                  value="toilet"
                  className={styles.inputCheckBox}
                  onClick={handleCheckbox}
                />
                <svg width="95px" height="95px">
                  <use xlinkHref={sprite + '#icon-Container-1'}></use>
                </svg>
              </label>
            </li>
          </ul>
          <h3 className={styles.title}>Vehicle type</h3>
          <ul className={styles.list}>
            <li>
              <label htmlFor="panelTruck" className={styles.camperBtn}>
                <input
                  type="checkbox"
                  name="panelTruck"
                  id="panelTruck"
                  value="panelTruck"
                  className={styles.inputCheckBox}
                  onClick={handleCheckbox}
                />
                <svg width="95px" height="95px">
                  <use xlinkHref={sprite + '#icon-Button-container'}></use>
                </svg>
              </label>
            </li>
            <li>
              <label htmlFor="fullyIntegrated" className={styles.camperBtn}>
                <input
                  type="checkbox"
                  name="fullyIntegrated"
                  id="fullyIntegrated"
                  value="fullyIntegrated"
                  className={styles.inputCheckBox}
                  onClick={handleCheckbox}
                />
                <svg width="95px" height="95px">
                  <use xlinkHref={sprite + '#icon-Button-container-1'}></use>
                </svg>
              </label>
            </li>
            <li>
              <label htmlFor="alcove" className={styles.camperBtn}>
                <input
                  type="checkbox"
                  name="alcove"
                  id="alcove"
                  value="alcove"
                  className={styles.inputCheckBox}
                  onClick={handleCheckbox}
                />
                <svg width="95px" height="95px">
                  <use xlinkHref={sprite + '#icon-Button-container-2'}></use>
                </svg>
              </label>
            </li>
          </ul>
          <button className={styles.searchBtn}>Search</button>
        </div>
      </div>
      <div className={styles.sectionWrap}>
        {campers.campers.map((camper) => {
          return <Camper key={camper._id} camper={camper} />;
        })}

        <button className={styles.loadMoreBtn} onClick={handleLoadMoreBtn}>
          Load more
        </button>
      </div>
    </section>
  );
};

export default CatalogPage;
