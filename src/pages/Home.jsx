import { useState } from 'react'
import { motion } from 'framer-motion'
import Home_image from '../assets/Home_image.jpg'

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: imageLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}>
      <img
        src={Home_image}
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
        alt='Home_image' />
      <div>
        <h2>
          Hi, I am Johnson Wang,
        </h2>
        <h3>
          An intern in HPE & a student in NYCU
        </h3>
      </div>
    </motion.div>
  )
}

export default Home