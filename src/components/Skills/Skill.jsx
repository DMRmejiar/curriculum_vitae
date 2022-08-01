const Skill = ({ name, level }) => {
  const skillPoints = [];
  for (let i = 0; i < 6; i += 1) {
    skillPoints.push(
      <span
        key={`${name}-${i}`}
        className={`w-2 h-2 rounded-full ${
          i < level ? 'bg-primary-green' : 'bg-soft-green'
        }`}
      />
    );
  }
  return (
    <div className='flex justify-between items-center'>
      <span className='text-primary-black'>{name}</span>
      <div className='flex gap-4'>{skillPoints}</div>
    </div>
  );
};

export { Skill };
