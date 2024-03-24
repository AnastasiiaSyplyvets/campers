import styles from '../Modal/Features.module.css';
import css from '../Modal/Reviews.module.css';
import sprite from '../../assets/sprite.svg';
export const Reviews = ({ camper }) => {
  const stars = (review) => {
    let starsCount = [];

    for (let i = 0; i < review.reviewer_rating; i += 1) {
      starsCount.push(
        <svg key={i} width="16px" height="16px">
          <use xlinkHref={sprite + '#icon-Rating'}></use>
        </svg>
      );
    }
    return starsCount;
  };

  return (
    <div className={css.wrap}>
      <div>
        <ul>
          {camper.reviews.map((review) => {
            return (
              <li key={review.reviewer_name}>
                <div className={css.revwrap}>
                  <div className={css.avatar}>
                    {review.reviewer_name.charAt(0)}
                  </div>
                  <div className={css.nameWrap}>
                    <p className={css.userName}>{review.reviewer_name}</p>
                    {stars(review)}
                  </div>
                </div>

                <p className={css.text}>{review.comment}</p>
              </li>
            );
          })}
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
