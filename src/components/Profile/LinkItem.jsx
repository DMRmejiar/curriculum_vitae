const LinkItem = ({ href, icon, content }) => (
  <a className='flex items-center text-primary-green gap-3' href={href}>
    {icon}
    <span>{content}</span>
  </a>
);

export { LinkItem };
