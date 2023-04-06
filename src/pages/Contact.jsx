import { useState } from 'react'
import { motion } from 'framer-motion'
import Contact_image from '../assets/Contact_image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  const icons = [
    {
      fa: faLinkedin,
      link: 'https://www.linkedin.com/in/yc-wang'
    },
    {
      fa: faGithub,
      link: 'https://github.com/y-c-wang'
    },
    {
      fa: faEnvelope,
      link: 'mailto:ycwang.cs@gmail.com'
    }
  ]

  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: imageLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}>
      <img
        src={Contact_image}
        onLoad={() => setImageLoaded(true)}
        style={{
          minWidth: '100%',
          minHeight: '100%',
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '-10',
          filter: 'blur(10px) brightness(30%)'
        }}
        alt='Contact_image' />
      <div>
        <h2>
          Let's get <a href='mailto:ycwang.cs@gmail.com'>connected</a>!
          <br/>
          Reach out for collaborations or to say hi!
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}>
          {icons.map(
            (icon) => (
              <a key={icon.link} href={icon.link} className='icon-block'>
                <FontAwesomeIcon icon={icon.fa} size='3x' />
              </a>
            )
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Contact