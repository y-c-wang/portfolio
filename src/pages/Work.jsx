import { motion } from 'framer-motion'
import HPE_image from '../assets/HPE_image.jpg'

function Work() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <img
        src={HPE_image}
        style={{
          width: '100%',
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '-10',
          filter: 'blur(10px) brightness(30%)'
        }}
        alt='HPE_image' />
      <h2>
        My Software Engineering Internship @ HPE
      </h2>
      <p>
        As an intern at HPE, I find the process of learning new technologies
        and tools enjoyable. Designing and developing features for internal
        websites has given me the chance to explore web development tools.
        While setting up CICD for deployment environments, I gained valuable
        experience and knowledge about how to ensure a seamless workflow,
        thanks to many help from my mentor as well as extensive training.
      </p>
      <p>
        Collaborating with team members using agile development has also helped
        me to become more flexible and efficient in my work. Hosting enterprise
        visiting events has provided me with the opportunity to communication
        and teamwork skills, which I have found particularly rewarding.
      </p>
      <p>
        While personal growth and development remain a priority for me, I find
        that the joy of learning and collaborating with others is what makes my
        internship fulfilling.
      </p>
    </motion.div>
  )
}

export default Work