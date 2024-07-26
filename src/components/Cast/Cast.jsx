
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../api/movies-api';
// import CastCard from '../CastCard/CastCard';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import s from './Cast.module.css'

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage />;

  const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div>
   
   <ul className={s.container}>
        {cast.map(member => (
          <li key={member.cast_id} className={s.cardWrapper}>
            <img
              src={
                member.profile_path
                  ? `https://image.tmdb.org/t/p/w500${member.profile_path}`
                  : defaultImg
              }
              alt={member.original_title}
            />
            <div className={s.memberWrapper}>
              <p>{member.name}</p>
              <p>Character: {member.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;