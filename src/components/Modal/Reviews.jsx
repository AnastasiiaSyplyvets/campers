import styles from '../Modal/Features.module.css';
import css from '../Modal/Reviews.module.css';
import sprite from '../../assets/sprite.svg';

import { Formik } from 'formik';

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
        {/* <form className={styles.form}>
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
        </form> */}
        <Formik
          initialValues={{ name: '', email: '', bookingDate: '', comment: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Email is required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.name) {
              errors.name = 'Name is required';
            }
            if (!values.bookingDate) {
              errors.bookingDate = 'Date is required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log('submitted');
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.inputForm}
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <input
                className={styles.inputForm}
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                className={styles.inputForm}
                type="text"
                placeholder="Booking date"
                name="bookingDate"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bookingDate}
              />
              {errors.bookingDate && touched.bookingDate && errors.bookingDate}
              <input
                className={styles.commentInput}
                type="text"
                placeholder="Comment"
                name="comment"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
              />
              {errors.comment && touched.comment && errors.comment}
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.formBtn}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
