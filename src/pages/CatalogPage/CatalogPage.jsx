import { useDispatch } from 'react-redux';

import { fetchCamperList } from '../../redux/operations';
const CatalogPage = () => {
  const dispatch = useDispatch();

  dispatch(fetchCamperList());
  return <div>catalog</div>;
};

export default CatalogPage;
