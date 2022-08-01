import { LanguageCard } from 'components/Profile/LanguageCard';

const Languages = () => (
  <div className='flex justify-center gap-6'>
    <LanguageCard Language='Español' expertice='Nativo' />
    <LanguageCard Language='Inglés' expertice='A2' />
  </div>
);
export { Languages };
