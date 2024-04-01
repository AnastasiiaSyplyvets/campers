import { useSelector } from 'react-redux';
import { Camper } from '../../components/Camper/Camper';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.campers.favorites);

  return (
    <section>
      {favorites
        ? favorites.map((camper) => <Camper key={camper._id} camper={camper} />)
        : null}
    </section>
  );
};

export default FavoritesPage;
