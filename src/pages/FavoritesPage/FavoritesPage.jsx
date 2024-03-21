import { useDispatch } from 'react-redux';
import { addFavorite, fetchCamperList } from '../../redux/operations';
import { useEffect } from 'react';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const id = 'uHBIAJFTA-IKJwh5T9T4x';

  // useEffect(() => {
  //   dispatch(fetchCamperList());
  // }, []);

  // dispatch(addFavorite(id));

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchCamperList());
      dispatch(addFavorite(id));
    };

    fetchData();
  }, [dispatch, id]);
  return <div>Favorites List</div>;
};

export default FavoritesPage;
