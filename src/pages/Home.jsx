import { Academic } from 'components/Academic';
import { Experience } from 'components/Experience';
import { Profile } from 'components/Profile';
import { Projects } from 'components/Projects';
import { Skills } from 'components/Skills';
import { Splitter } from 'components/Shared/Splitter';

const Home = () => (
  <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:p-6 lg:gap-6 lg:items-baseline'>
    <Profile className='md:row-span-2 lg:row-span-1 lg:col-span-3 lg:grid-cols-3 lg:p-0' />
    <Splitter className='md:hidden' />
    <Skills className='lg:col-span-2 lg:grid-cols-2 lg:p-0' />
    <Splitter className='md:hidden' />
    <Academic className='lg:p-0' />
    <Splitter className='md:col-span-2 md:pt-4 lg:hidden' />
    <Experience className='lg:col-span-2 lg:grid-cols-2 lg:p-0' />
    <Splitter className='md:hidden' />
    <Projects className='lg:p-0' />
  </div>
);

export default Home;
