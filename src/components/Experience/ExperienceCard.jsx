import { Card } from 'components/Shared/Card';

const ExperienceCard = ({ title, date, job, content }) => (
  <Card title={title}>
    <span className='text-ligth-green text-xs'>{date}</span>
    <span className='text-primary-black font-semibold'>{job}</span>
    <ul className='pl-4'>
      {content.map((item) => (
        <li key={`xp-${item}`} className='text-primary-black'>
          {item}
        </li>
      ))}
    </ul>
  </Card>
);

export { ExperienceCard };
