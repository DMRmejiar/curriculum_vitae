import { Card } from 'components/Shared/Card';

const ProjectCard = ({ title, job, description }) => (
  <Card title={title}>
    <h4 className='text-primary-black font-semibold'>{job}</h4>
    <p className='text-primary-black'>{description}</p>
  </Card>
);

export { ProjectCard };
