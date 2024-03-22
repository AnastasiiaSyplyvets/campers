import { useSelector } from 'react-redux';
import styles from './Camper.module.css';
import sprite from '../../assets/sprite.svg';

export const Camper = () => {
  const campers = useSelector((state) => state.campers);
  console.log(campers);

  const ratingCount = (reviews) => {
    let total = 0;
    for (let i = 0; i < reviews.length; i += 1) {
      total += reviews[i].reviewer_rating;
    }
    return total / reviews.length;
  };

  return campers.campers.map((camper, index) => {
    return (
      <div key={index}>
        <img width="219px" src={camper.gallery[0]}></img>

        <div>
          <div>
            <h2>{camper.name}</h2>
            <p>&euro; {camper.price}</p>
          </div>
          <div>
            <svg width="16px" height="16px">
              <use xlinkHref={sprite + '#icon-star'}></use>
            </svg>
            <p>
              {ratingCount(camper.reviews)} ( {camper.reviews.length} Rewiews)
            </p>
            <svg width="12px" height="14px" fill="#101828" stroke="#ffffff">
              <use xlinkHref={sprite + '#icon-map-pin-1'}></use>
            </svg>
            <p>{camper.location}</p>
          </div>
          {/* <div></div>
          <p></p> */}
        </div>
      </div>
    );
  });
};
