import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <main>
      <Link to="/" className={css.linkHome}>
        Go Home
      </Link>
      <h3 className={css.title}>Page Not Found</h3>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default NotFoundPage;