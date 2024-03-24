import styles from '../Modal/Features.module.css';
import sprite from '../../assets/sprite.svg';

export const Features = ({ camper }) => {
  return (
    <div className={styles.mainWrap}>
      <div>
        <ul className={styles.catList}>
          <li>
            <button className={styles.catBtn} type="button">
              <svg width="20px" height="20px">
                <use xlinkHref={sprite + '#icon-Users'}></use>
              </svg>
              {camper.adults} adults
            </button>
          </li>
          <li>
            <button className={styles.catBtn} type="button">
              <svg width="20px" height="20px" fill="#101828">
                <use xlinkHref={sprite + '#icon-Container-2'}></use>
              </svg>
              {camper.transmission}
            </button>
          </li>
          <li>
            <button className={styles.catBtn} type="button">
              <svg width="20px" height="20px" stroke="#101828">
                <use xlinkHref={sprite + '#icon-Vertical-container'}></use>
              </svg>{' '}
              AC
            </button>
          </li>
          <li>
            <button className={styles.catBtn} type="button">
              <svg width="20px" height="20px">
                <use xlinkHref={sprite + '#icon-Vertical-container-1'}></use>
              </svg>
              {camper.engine}
            </button>
          </li>
          <li>
            <button className={styles.catBtn} type="button">
              <svg width="20px" height="20px">
                <use xlinkHref={sprite + '#icon-Horizontal-container-2'}></use>
              </svg>
              Kitchen
            </button>
          </li>
          <li>
            <button className={styles.catBtn} type="button">
              <svg width="20px" height="20px" fill="#fffff">
                <use xlinkHref={sprite + '#icon-Container-3'}></use>
              </svg>
              {camper.details.beds} beds
            </button>
          </li>
          <li>
            <button className={styles.catBtn} type="button">
              <svg width="20px" height="20px">
                <use
                  xlinkHref={sprite + '#icon-streamline_hotel-air-conditioner'}
                ></use>
              </svg>
              {camper.details.airConditioner} air conditioner
            </button>
          </li>
          <li>
            {camper.details.cd ? (
              <button className={styles.catBtn} type="button">
                <svg width="20px" height="20px">
                  <use xlinkHref={sprite + '#icon-icon-park-outline_cd'}></use>
                </svg>
                CD
              </button>
            ) : null}
          </li>
          <li>
            <button className={styles.catBtn} type="button">
              <svg width="20px" height="20px" fill="##F2F4F7">
                <use xlinkHref={sprite + '#icon-solar_radio-linear'}></use>
              </svg>
              Radio
            </button>
          </li>
          <li>
            <button className={styles.catBtn} type="button">
              <svg width="20px" height="20px">
                <use
                  xlinkHref={
                    sprite + '#icon-icon-park-outline_hand-painted-plate'
                  }
                ></use>
              </svg>
              {camper.details.hob} hob
            </button>
          </li>
        </ul>
        <p className={styles.featuresTitle}>Vehicle details</p>
        <ul className={styles.featuresContainer}>
          <li className={styles.feature}>
            <p>Form</p>
            <p>{camper.form}</p>
          </li>
          <li className={styles.feature}>
            <p>Length</p>
            <p>{camper.length}</p>
          </li>
          <li className={styles.feature}>
            <p>Width</p>
            <p>{camper.width}</p>
          </li>
          <li className={styles.feature}>
            <p>Height</p>
            <p>{camper.height}</p>
          </li>
          <li className={styles.feature}>
            <p>Tank</p>
            <p>{camper.tank}</p>
          </li>
          <li className={styles.feature}>
            <p>Consumption</p>
            <p>{camper.consumption}</p>
          </li>
        </ul>
      </div>
      <div className={styles.partWrap}>
        <h2 className={styles.formTitle}>Book your campervan now</h2>
        <p className={styles.formText}>
          Stay connected! We are always ready to help you.
        </p>
        <form className={styles.form}>
          <input className={styles.inputForm} type="text" placeholder="Name" />
          <input className={styles.inputForm} type="text" placeholder="Email" />
          <input
            className={styles.inputForm}
            type="text"
            placeholder="Booking date"
          />
          <input
            className={styles.commentInput}
            type="text"
            placeholder="Comment"
          />
          <button className={styles.formBtn} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
