'use client'

import { motion } from 'framer-motion'
import { TypingText } from '../components'

import styles from '../styles'
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| About SPARK' textStyles='text-center' />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        Welcome to <span className='font-extrabold text-white'>Spark</span>, a
        pioneering force in the world of{' '}
        <span className='font-extrabold text-white'>
          Augmented Reality (AR), Mixed Reality (MR), and Virtual Reality (VR)
        </span>{' '}
        services. Since our inception, we have been committed to transforming
        the way people interact with digital content, pushing the boundaries of
        imagination and technology. of today. <br></br>
        <br></br>Explore our site to learn more about our services, our team,
        and our vision for the future of AR, MR, and VR. Join us at Spark, where
        we're igniting the future of immersive technology."
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
)

export default About
