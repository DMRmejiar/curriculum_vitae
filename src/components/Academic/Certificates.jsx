const CertificateItem = ({ image, url, name, date }) => (
  <a href={url} className='flex gap-6' target='_blank' rel='noreferrer'>
    <img className='w-12 h-12 rounded-full' src={image} alt={name} />
    <div className='grid'>
      <span className='text-primary-black'>{name}</span>
      <span className='text-dark-gray text-sm'>{date}</span>
    </div>
  </a>
);

const Certificates = () => (
  <div className='flex flex-col gap-1'>
    <CertificateItem
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png'
      url='https://www.coursera.org/account/accomplishments/certificate/ZKNSMUJQAQ2N'
      name='Technical Support Fundamentals'
      date='Agosto 2020'
    />
  </div>
);

export { Certificates };
