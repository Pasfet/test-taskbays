import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import MatchesPage from '../pages/MatchesPage/MatchesPage';

const Router = () => {
  const { all_clubs } = useAppSelector(state => state.clubs);
  const navigate = useNavigate();

  useEffect(() => {
    if (all_clubs.length) {
      navigate(`/matches?club_id=${all_clubs[0].id}`);
    }
  }, [navigate, all_clubs]);

  return (
    <Routes>
      <Route path="/matches" element={<MatchesPage />} />
    </Routes>
  );
};

export default Router;
