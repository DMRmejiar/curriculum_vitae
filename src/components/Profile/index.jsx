import { Contact } from 'components/Profile/Contact';
import { Languages } from 'components/Profile/Languages';
import { Title } from 'components/Shared/Title';

const Photo = () => (
  <div className='w-full flex justify-center'>
    <img
      className='w-48 h-48 rounded-full border-8 border-ligth-green'
      src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg'
      alt='Foto de perfil'
    />
  </div>
);

const NameAndProfile = () => (
  <div className='flex flex-col items-center gap-2'>
    <Title title='DAVID MEJÍA RESPTREPO' />
    <h3 className='text-primary-green text-2xl'>Full Stack Developer</h3>
  </div>
);

const Description = () => (
  <p className='text-primary-black text-justify'>
    Estudiante de ingeniería de sistemas con alta capacidad de adaptabilidad y
    facilidad para adquirir nuevos conocimientos, además de un buen manejo de
    diferentes frameworks, entre ellos destacan Angular para desarrollo web,
    Flutter en Mobile y NodeJS para el desarrollo de servicios en backend.
  </p>
);

const Profile = () => (
  <section className='flex flex-col items-stretch gap-6'>
    <Photo />
    <NameAndProfile />
    <Description />
    <Languages />
    <Contact />
  </section>
);

export { Profile };
