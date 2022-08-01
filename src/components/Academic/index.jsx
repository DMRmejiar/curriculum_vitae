import { Title } from 'components/Shared/Title';
import { TimeLine } from 'components/Academic/TimeLine';
import { Certificates } from 'components/Academic/Certificates';

const Academic = ({ className }) => (
  <section className={`flex flex-col items-stretch gap-6 p-6 ${className}`}>
    <Title title='Formación Académica' />
    <TimeLine />
    <h4 className='text-ligth-green text-center text-xl'>Certificaciones</h4>
    <Certificates />
  </section>
);

export { Academic };
