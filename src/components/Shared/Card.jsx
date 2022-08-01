const Card = ({ children, title }) => (
  <div className='bg-primary-gray p-4 rounded-md flex flex-col'>
    <h3 className='text-ligth-green font-semibold text-base'>{title}</h3>
    {children}
  </div>
);

export { Card };
