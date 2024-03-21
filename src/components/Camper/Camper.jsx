import { useSelector } from 'react-redux';

export const Camper = () => {
  const camper = useSelector((state) => state.campers);

  return (
    <div>
      <img width="50px" src={camper.avatar}></img>
      <div>
        <h2>{camper.name}</h2>
        <div></div>
        <p></p>
      </div>
    </div>
  );
};
