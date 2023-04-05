import { motion } from 'framer-motion'
import Home_image from '../assets/Home_image.jpg'

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <img
        src={Home_image}
        style={{
          width: '100%',
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '-10',
          filter: 'blur(10px) brightness(30%)'
        }}
        alt='Home_image' />
      <div>
        <h2>
          Hi, I am Johnson Wang,
          <br />
          An intern in HPE & a student in NYCU
        </h2>
      </div>
    </motion.div>
  )
}

export default Home