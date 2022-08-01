const LanguageCard = ({ Language, expertice }) => (
  <div className='bg-soft-green rounded-lg flex flex-col items-center p-3 min-w-[80px]'>
    <span>{Language}</span>
    <span className='text-sm'>{expertice}</span>
  </div>
);

export { LanguageCard };
