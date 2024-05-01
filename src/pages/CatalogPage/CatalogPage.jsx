import { useDispatch } from 'react-redux';

import { fetchCamperList, filterCampers } from '../../redux/operations';
import { Camper } from '../../components/Camper/Camper';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import sprite from '../../assets/sprite.svg';
import styles from '../CatalogPage/CatalogPage.module.css';
const CatalogPage = () => {
  const campers = useSelector((state) => state.campers);
  const filteredCampers = useSelector((state) => state.campers.filter);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamperList(page));
  }, [page, dispatch]);

  const handleLoadMoreBtn = () => {
    setPage(page + 1);
  };

  const handleCheckbox = (e) => {
    const value = e.target.value;
    setFilter(value);
  };

  const handleSubmitFilters = () => {
    dispatch(filterCampers(filter));
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
          <h3 className={styles.filters}>Filters</h3>
          <ul className={styles.list}>
            <li className={styles.buttonContainer}>
              <label htmlFor="airConditioner" className={styles.camperBtn}>
                <input
                  onClick={handleCheckbox}
                  className={styles.inputCheckBox}
                  type="checkbox"
                  id="airConditioner"
                  name="airConditioner"
                  value="airConditioner"
                ></input>
                <svg width="32px" height="60px" className={styles.svgBtn}>
                  <use xlinkHref={sprite + '#icon-Vertical-container'}></use>
                </svg>
              </label>
            </li>
            <li className={styles.buttonContainer}>
              <label htmlFor="automatic" className={styles.camperBtn}>
                <input
                  onClick={handleCheckbox}
                  type="checkbox"
                  id="automatic"
                  name="automatic"
                  value="automatic"
                  className={styles.inputCheckBox}
                />
                <svg width="79px" height="60px" className={styles.svgBtn}>
                  <use xlinkHref={sprite + '#icon-Horizontal-container'}></use>
                </svg>
              </label>
            </li>
            <li className={styles.buttonContainer}>
              <label htmlFor="kitchen" className={styles.camperBtn}>
                <input
                  type="checkbox"
                  name="kitchen"
                  id="kitchen"
                  value="kitchen"
                  className={styles.inputCheckBox}
                  onClick={handleCheckbox}
                />
                <svg width="59px" height="60px" className={styles.svgBtn}>
                  <use
                    xlinkHref={sprite + '#icon-Horizontal-container-1'}
                  ></use>
                </svg>
              </label>
            </li>
            <li className={styles.buttonContainer}>
              <label htmlFor="TV" className={styles.camperBtn}>
                <input
                  type="checkbox"
                  id="TV"
                  name="TV"
                  value="TV"
                  className={styles.inputCheckBox}
                  onClick={handleCheckbox}
                />
                <svg width="32px" height="60px" className={styles.svgBtn}>
                  <use xlinkHref={sprite + '#icon-Container'}></use>
                </svg>
              </label>
            </li>
            <li className={styles.buttonContainer}>
              <label htmlFor="toilet" className={styles.camperBtn}>
                <input
                  type="checkbox"
                  name="toilet"
                  id="toilet"
                  value="toilet"
                  className={styles.inputCheckBox}
                  onClick={handleCheckbox}
                />
                <svg width="90px" height="60px" className={styles.svgBtn}>
                  <use xlinkHref={sprite + '#icon-Container-1'}></use>
                </svg>
              </label>
            </li>
          </ul>
          <h3 className={styles.title}>Vehicle type</h3>
          <ul className={styles.list}>
            <li className={styles.buttonContainer}>
              <label htmlFor="panelTruck" className={styles.camperBtn}>
                <input
                  type="checkbox"
                  name="panelTruck"
                  id="panelTruck"
                  value="panelTruck"
                  className={styles.inputCheckBox}
                  onClick={handleCheckbox}
                />
                <svg width="40px" height="57px" className={styles.svgBtn}>
                  <use xlinkHref={sprite + '#icon-Button-container'}></use>
                </svg>
              </label>
            </li>
            <li className={styles.buttonContainer}>
              <label htmlFor="fullyIntegrated" className={styles.camperBtn}>
                <input
                  type="checkbox"
                  name="fullyIntegrated"
                  id="fullyIntegrated"
                  value="fullyIntegrated"
                  className={styles.inputCheckBox}
                  onClick={handleCheckbox}
                />
                <svg width="80px" height="76px" className={styles.svgBtn}>
                  <use xlinkHref={sprite + '#icon-Button-container-1'}></use>
                </svg>
              </label>
            </li>
            <li className={styles.buttonContainer}>
              <label htmlFor="alcove" className={styles.camperBtn}>
                <input
                  type="checkbox"
                  name="alcove"
                  id="alcove"
                  value="alcove"
                  className={styles.inputCheckBox}
                  onClick={handleCheckbox}
                />
                <svg width="52px" height="56px" className={styles.svgBtn}>
                  <use xlinkHref={sprite + '#icon-Button-container-2'}></use>
                </svg>
              </label>
            </li>
          </ul>
          <button onClick={handleSubmitFilters} className={styles.searchBtn}>
            Search
          </button>
        </div>
      </div>
      <div className={styles.sectionWrap}>
        {/* {campers.campers.map((camper) => {
          return <Camper key={camper._id} camper={camper} />;
        })} */}
        {filteredCampers.length !== 0
          ? filteredCampers.map((camper) => {
              return <Camper key={camper._id} camper={camper} />;
            })
          : campers.campers.map((camper) => {
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
