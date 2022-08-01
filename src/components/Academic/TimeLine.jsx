const TimeLineItem = ({ institution, title, current = false }) => (
  <div className='flex items-stretch'>
    <div className='relative w-4 overflow-clip'>
      <span className='absolute w-full h-4 rounded-full bg-ligth-green' />
      <span
        className={`absolute top-2 left-[7px] border-x-[1px] h-full border-x-ligth-green${
          current ? ' border-dashed' : ''
        }`}
      />
    </div>
    <div className='flex flex-col items-stretch pl-2'>
      <span className='text-primary-black'>{institution}</span>
      <span className='text-dark-gray'>{title}</span>
    </div>
  </div>
);

const TimeLine = () => (
  <div className='flex flex-col'>
    <TimeLineItem
      institution='I.E. Rafael J. Mejía (2004 - 2015)'
      title='Bachiller Academico'
    />
    <TimeLineItem
      institution='Universidad de Antioquia (2016 - 2023)'
      title='Ingeniería de Sistemas'
      current
    />
  </div>
);

export { TimeLine };
