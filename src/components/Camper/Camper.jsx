import styles from './Camper.module.css';
import sprite from '../../assets/sprite.svg';
import { useState } from 'react';
import Modal from 'react-modal';
import { CamperModal } from '../Modal/Modal';
import { addFavorite } from '../../redux/operations';
import { useDispatch } from 'react-redux';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Camper = ({ camper }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [active, setActive] = useState(false);

  const ratingCount = (reviews) => {
    let total = 0;
    for (let i = 0; i < reviews.length; i += 1) {
      total += reviews[i].reviewer_rating;
    }
    return total / reviews.length;
  };

  function openModal() {
    setisModalOpen(true);
  }
  function closeModal() {
    setisModalOpen(false);
  }

  Modal.setAppElement('#modal');

  const dispatch = useDispatch();

  const addToFavorite = (id) => {
    if (active === true) {
      setActive(false);
    }
    setActive(true);

    dispatch(addFavorite(id));
  };

  return (
    <>
      <div className={styles.camperWrap}>
        <img
          width="290px"
          height="310px"
          src={camper.gallery[0]}
          className={styles.camperImg}
        ></img>

        <div>
          <div className={styles.camperName}>
            <p className={styles.name}>{camper.name}</p>
            <p>&euro; {camper.price},00</p>
            <button
              onClick={() => addToFavorite(camper._id)}
              className={styles.heartBtn}
            >
              <svg
                className={active ? styles.active : styles.heartSvg}
                width="24px"
                height="24px"
                fill="#F2F4F7"
                stroke="#101828"
              >
                <use xlinkHref={sprite + '#icon-heart'}></use>
              </svg>
            </button>
          </div>

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
          <p className={styles.camperDescr}>
            {camper.description.slice(0, 60)}...
          </p>
          <ul className={styles.categories}>
            <li>
              <button className={styles.categoryName} type="button">
                <svg width="20px" height="20px">
                  <use xlinkHref={sprite + '#icon-Users'}></use>
                </svg>
                {camper.adults} adults
              </button>
            </li>
            <li>
              <button className={styles.categoryName} type="button">
                <svg width="20px" height="20px" fill="#101828">
                  <use xlinkHref={sprite + '#icon-Container-2'}></use>
                </svg>
                {camper.transmission}
              </button>
            </li>
            <li>
              <button className={styles.categoryName} type="button">
                <svg width="20px" height="20px">
                  <use xlinkHref={sprite + '#icon-Vertical-container-1'}></use>
                </svg>
                {camper.engine}
              </button>
            </li>
            <li>
              {camper.details.kitchen ? (
                <button className={styles.categoryName} type="button">
                  <svg width="20px" height="20px">
                    <use
                      xlinkHref={sprite + '#icon-Horizontal-container-2'}
                    ></use>
                  </svg>
                  Kitchen
                </button>
              ) : null}
            </li>
            <li>
              {camper.details.beds ? (
                <button className={styles.categoryName} type="button">
                  <svg width="20px" height="20px" fill="#fffff">
                    <use xlinkHref={sprite + '#icon-Container-3'}></use>
                  </svg>
                  {camper.details.beds} beds
                </button>
              ) : null}
            </li>
            <li>
              {camper.details.airConditioner ? (
                <button className={styles.categoryName} type="button">
                  <svg width="20px" height="20px" stroke="#101828">
                    <use xlinkHref={sprite + '#icon-Vertical-container'}></use>
                  </svg>
                  AC
                </button>
              ) : null}
            </li>
          </ul>

          <button
            onClick={openModal}
            className={styles.showMoreBtn}
            type="button"
          >
            Show more
          </button>
          <Modal
            isOpen={isModalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <CamperModal camper={camper} closeModal={closeModal} />
          </Modal>
        </div>
      </div>
    </>
  );
  // });
};
