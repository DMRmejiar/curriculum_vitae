const Dot = () => <span className='w-2 h-2 rounded-full bg-primary-green' />;

const Splitter = ({ className }) => (
  <div className={`w-full flex gap-4 justify-center ${className}`}>
    <Dot />
    <Dot />
    <Dot />
  </div>
);

export { Splitter, Dot };
