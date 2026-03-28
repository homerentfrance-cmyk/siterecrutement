import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const TICKER_ITEMS = [
  'le RECRUTEMENT d\'excellence',
  'la CHASSE de candidats stratégiques',
  'l\'approche de talents en poste',
]

function Ticker() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % TICKER_ITEMS.length)
        setVisible(true)
      }, 500)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero__ticker">
      <span className="hero__ticker-prefix">Nous facilitons&nbsp;</span>
      <span
        className={`hero__ticker-item ${visible ? 'hero__ticker-item--visible' : 'hero__ticker-item--hidden'}`}
      >
        {TICKER_ITEMS[index]}
      </span>
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  const headline = 'THE BEST TALENTS ARE ALREADY EMPLOYED.'
  const subline = "THAT'S WHERE WE START."
  const words1 = headline.split(' ')
  const words2 = subline.split(' ')

  return (
    <section id="hero" ref={sectionRef} className="hero">
      {/* Parallax Background */}
      <motion.div className="hero__bg" style={{ y: bgY }}>
        <div className="hero__bg-overlay" />
        {/* SVG texture grain */}
        <svg className="hero__grain" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" opacity="0.045" />
        </svg>
      </motion.div>

      {/* Decorative lines */}
      <div className="hero__lines">
        <span className="hero__line hero__line--left" />
        <span className="hero__line hero__line--right" />
      </div>

      {/* Content */}
      <motion.div className="hero__content" style={{ y: textY, opacity }}>
        {/* Eyebrow */}
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        >
          EXECUTIVE SEARCH — LUXE & PRESTIGE
        </motion.p>

        {/* Main Headline */}
        <h1 className="hero__headline">
          <span className="hero__headline-line">
            {words1.map((word, i) => (
              <motion.span
                key={i}
                className="hero__word"
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </span>
          <span className="hero__headline-line hero__headline-line--accent">
            {words2.map((word, i) => (
              <motion.span
                key={i}
                className="hero__word hero__word--accent"
                custom={i + words1.length + 1}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Separator */}
        <motion.div
          className="hero__separator"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <Ticker />
        </motion.div>

        {/* CTA */}
        <motion.div
          className="hero__cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.7 }}
        >
          <a
            href="#manifeste"
            className="hero__btn hero__btn--primary"
            onClick={(e) => { e.preventDefault(); document.querySelector('#manifeste')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Découvrir notre approche
          </a>
          <a
            href="#contact"
            className="hero__btn hero__btn--ghost"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Initier une mission
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <span className="hero__scroll-line" />
          <span className="hero__scroll-label">Défiler</span>
        </motion.div>
      </motion.div>

      {/* Sector badges */}
      <motion.div
        className="hero__sectors"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        {['Gastronomie', 'Hôtellerie', 'Immobilier'].map((s) => (
          <span key={s} className="hero__sector-badge">{s}</span>
        ))}
      </motion.div>
    </section>
  )
}
