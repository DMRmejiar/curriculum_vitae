import { MdOutlineAlternateEmail } from 'react-icons/md';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { LinkItem } from 'components/Profile/LinkItem';

const Contact = () => (
  <div className='grid gap-4'>
    <LinkItem
      href='mailto:dmrmejia57@gmail.com'
      icon={MdOutlineAlternateEmail({ size: 24 })}
      content='dmrmejia57@gmail.com'
    />
    <LinkItem
      href='https://www.linkedin.com/in/david-mejia-restrepo-54b70617b'
      icon={AiOutlineLinkedin({ size: 24 })}
      content='LinkendIn'
    />
    <LinkItem
      href='https://github.com/DMRmejiar'
      icon={AiOutlineGithub({ size: 24 })}
      content='GitHub'
    />
  </div>
);

export { Contact };
