import styles from '../Modal/Features.module.css';
import css from '../Modal/Reviews.module.css';
import sprite from '../../assets/sprite.svg';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let orderSchema = object({
  name: string().required(),
  email: string().email().required(),
  bookingDate: string().required(),
  comment: string(),
});

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

        <Formik
          initialValues={{ name: '', email: '', bookingDate: '', comment: '' }}
          validationSchema={orderSchema}
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
            toast.success('Your booking is successfully submitted!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
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
            <Form className={styles.form} onSubmit={handleSubmit}>
              <Field
                className={
                  (touched.name && !errors.name ? styles.inputSuccess : null) ||
                  (touched.name && errors.name
                    ? styles.inputErr
                    : styles.inputForm)
                }
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name ? (
                <ErrorMessage
                  className={css.errorMsg}
                  name="name"
                  component="div"
                />
              ) : null}

              <Field
                className={
                  (touched.email && !errors.email
                    ? styles.inputSuccess
                    : null) ||
                  (touched.email && errors.email
                    ? styles.inputErr
                    : styles.inputForm)
                }
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessage
                className={css.errorMsg}
                name="email"
                component="div"
              />
              <Field
                className={
                  (touched.bookingDate && !errors.bookingDate
                    ? styles.inputSuccess
                    : null) ||
                  (touched.bookingDate && errors.bookingDate
                    ? styles.inputErr
                    : styles.inputForm)
                }
                type="text"
                placeholder="Booking date"
                name="bookingDate"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bookingDate}
              />

              <ErrorMessage
                className={css.errorMsg}
                name="bookingDate"
                component="div"
              />
              <Field
                className={styles.commentInput}
                type="text"
                placeholder="Comment"
                name="comment"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
              />

              <ErrorMessage
                className={css.errorMsg}
                name="comment"
                component="div"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.formBtn}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
