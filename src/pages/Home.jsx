import { Academic } from 'components/Academic';
import { Experience } from 'components/Experience';
import { Profile } from 'components/Profile';
import { Projects } from 'components/Projects';
import { Skills } from 'components/Skills';
import { Splitter } from 'components/Shared/Splitter';

const Home = () => (
  <>
    <Profile />
    <Splitter />
    <Skills />
    <Splitter />
    <Academic />
    <Splitter />
    <Experience />
    <Splitter />
    <Projects />
  </>
);

export default Home;
