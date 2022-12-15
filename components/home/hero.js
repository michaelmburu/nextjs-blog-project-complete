import Image from 'next/image'
import classes from './hero.module.css'
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/michael.jpeg'
          alt='My profile'
          height={400}
          width={400}
        />
      </div>
      <h1>Hi, am Ichangai</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        NextJs
      </p>
    </section>
  )
}

export default Hero
