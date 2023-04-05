import { useState } from 'react'
import { motion } from 'framer-motion'
import CAMPUS_image from '../assets/CAMPUS_image.jpeg'

function Work() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: imageLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}>
      <img
        src={CAMPUS_image}
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
        alt='CAMPUS_image' />
      <div>
        <h2>
          <a href='https://smartcampus-1b31f.firebaseapp.com/map'>CAMPUS</a>&nbsp;
          (Collaborative Project)
        </h2>
        <i>
          Advised by Prof. Yung-Ju Chang and collaborate with lab partners
          in Mobile and Ubiquitous Interaction Lab
        </i>
        <p>
          CAMPUS is a crowdsourcing platform for school community to exchange
          information.
          <br />
          We are interested in how people utilize spatial information and how to
          improve users' understanding to the information.
          <br />
          We identify impactful approaches for increasing crowd participation by
          analyzing use behavior across different UI/UX designs.
        </p>
        <h3>Publication</h3>
        <b>
          CAMPUS: A University Crowdsourcing Platform for Reporting Facility,
          Status Update, and Problem Area Information&nbsp;
          <a href='https://dl.acm.org/doi/10.1145/3500868.3559447'>(CSCW EA '22)</a>
        </b>
        <br />
        <i>
          Chih-Chi Chung, Yen-Chun Lin,&nbsp;
          <mark>Yu-Cheng Wang</mark>,
          Tze-Yu Chen, Chia-Yu Chen, Xinye Jiang, Fang-Yu Lin, Yu Hao Weng,
          Yung-Ju Chang*
        </i>
        <h3>Development</h3>
        We maintain our code in this&nbsp;
        <a href='https://github.com/CAMPUS-NYCU'>GitHub organization</a>.
      </div>
    </motion.div>
  )
}

export default Work