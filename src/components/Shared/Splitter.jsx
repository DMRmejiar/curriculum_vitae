const Dot = () => <span className='w-2 h-2 rounded-full bg-primary-green' />;

const Splitter = () => (
  <div className='w-full flex py-6 gap-4 justify-center'>
    <Dot />
    <Dot />
    <Dot />
  </div>
);

export { Splitter, Dot };
