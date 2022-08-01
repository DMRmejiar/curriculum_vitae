import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <header>
      <nav className='fixed w-full z-10 p-4 bg-primary-green drop-shadow-lg'>
        <h1 className='text-2xl font-bold text-primary-gray'>
          Curriculum Vitae
        </h1>
      </nav>
    </header>
    <main className='p-6 pt-[84px] z-0 bg-base-gray'>
      <Outlet />
    </main>
  </>
);

export default Layout;
