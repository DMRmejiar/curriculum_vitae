import { Contact } from 'components/Profile/Contact';
import { Languages } from 'components/Profile/Languages';
import { Title } from 'components/Shared/Title';

const Photo = ({ className }) => (
  <div className={`w-full flex justify-center items-center ${className}`}>
    <img
      className='w-48 h-48 object-cover object-top rounded-full border-8 border-ligth-green'
      src='profile.jpg'
      alt='Foto de perfil'
    />
  </div>
);

const NameAndProfile = ({ className }) => (
  <div className={`flex flex-col items-center gap-2${className}`}>
    <Title title='DAVID MEJÍA RESTREPO' />
    <h3 className='text-primary-green text-2xl'>Full Stack Developer</h3>
  </div>
);

const Description = ({ className }) => (
  <p className={`text-primary-black text-justify ${className}`}>
    Estudiante de ingeniería de sistemas con alta capacidad de adaptabilidad y
    facilidad para adquirir nuevos conocimientos, además de un buen manejo de
    diferentes frameworks, entre ellos destacan Angular para desarrollo web,
    Flutter en Mobile y NodeJS para el desarrollo de servicios en backend.
  </p>
);

const Profile = ({ className }) => (
  <section className={`grid items-stretch gap-x-12 gap-y-6 p-6 ${className}`}>
    <Photo className='lg:row-span-2' />
    <NameAndProfile />
    <Description className='lg:col-start-2 lg:row-start-2' />
    <Languages />
    <Contact />
  </section>
);

export { Profile };
