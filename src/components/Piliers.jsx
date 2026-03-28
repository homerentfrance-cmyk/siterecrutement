import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pillars = [
  {
    id: 'succes',
    number: 'I',
    title: 'Le Recrutement\nau Succès',
    subtitle: 'Performance & Résultat',
    description:
      'Honoraires conditionnés à la réussite du placement. Vous ne payez qu\'en cas de succès confirmé. Idéal pour des recrutements ciblés où la rapidité et la précision sont primordiales. Notre engagement total, votre risque zéro.',
    features: [
      'Honoraires uniquement au placement',
      'Délai moyen : 3 à 6 semaines',
      'Garantie de remplacement 6 mois',
      'Rapport de marché inclus',
    ],
    accent: 'copper',
  },
  {
    id: 'retainer',
    number: 'II',
    title: 'Le Recrutement\nsur Acompte',
    subtitle: 'Engagement & Partenariat',
    description:
      'Pour les mandats stratégiques et les postes de direction. Un engagement formel, une exclusivité totale, une démarche structurée en trois phases. Le format privilégié des entreprises qui ne laissent rien au hasard.',
    features: [
      'Acompte à la signature du mandat',
      'Exclusivité et priorité absolue',
      'Rapport d\'avancement hebdomadaire',
      'Assessment comportemental inclus',
    ],
    accent: 'rose',
    featured: true,
  },
  {
    id: 'directe',
    number: 'III',
    title: 'L\'Approche\nDirecte Pure',
    subtitle: 'Chasse & Discrétion',
    description:
      'La forme la plus noble du recrutement. Identification et approche de talents qui ne se manifesteront jamais d\'eux-mêmes. Pour les postes où la discrétion est non négociable et où le profil idéal est déjà en poste ailleurs.',
    features: [
      'Cartographie du marché complète',
      'Approche ultra-confidentielle',
      'Cibles identifiées sous 10 jours',
      'Dossier de présentation exclusif',
    ],
    accent: 'copper',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

function LeatherPattern({ accent }) {
  const color = accent === 'rose' ? '#C4A0A0' : '#C4956A'
  return (
    <svg
      className="pilier__leather"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>
        <pattern id={`leather-${accent}`} x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          {/* Diamond quilted leather pattern */}
          <path
            d="M14 0 L28 14 L14 28 L0 14 Z"
            fill="none"
            stroke={color}
            strokeWidth="0.4"
            opacity="0.18"
          />
          <circle cx="14" cy="14" r="1.2" fill={color} opacity="0.12" />
          <circle cx="0" cy="0" r="1.2" fill={color} opacity="0.08" />
          <circle cx="28" cy="0" r="1.2" fill={color} opacity="0.08" />
          <circle cx="0" cy="28" r="1.2" fill={color} opacity="0.08" />
          <circle cx="28" cy="28" r="1.2" fill={color} opacity="0.08" />
        </pattern>
        <radialGradient id={`vignette-${accent}`} cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.6" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#leather-${accent})`} />
      <rect width="100%" height="100%" fill={`url(#vignette-${accent})`} />
    </svg>
  )
}

export default function Piliers() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="piliers" ref={sectionRef} className="piliers">
      <div className="container">
        {/* Header */}
        <motion.div
          className="piliers__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-eyebrow">Nos Expertises</span>
          <h2 className="section-title">
            Trois piliers d'excellence.<br />
            <em>Un seul standard.</em>
          </h2>
          <p className="piliers__subtitle">
            Quelle que soit la modalité choisie, notre engagement est identique :<br />
            vous trouver la personne rare qui fera la différence.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="piliers__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              className={`pilier ${pillar.featured ? 'pilier--featured' : ''} pilier--${pillar.accent}`}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            >
              {/* Leather texture background */}
              <div className="pilier__texture-wrap">
                <LeatherPattern accent={pillar.accent} />
              </div>

              {/* 3D light effect */}
              <div className="pilier__glow" />

              {/* Content */}
              <div className="pilier__content">
                <div className="pilier__top">
                  <span className="pilier__roman">{pillar.number}</span>
                  {pillar.featured && (
                    <span className="pilier__badge">Le plus demandé</span>
                  )}
                </div>

                <div className="pilier__title-block">
                  <span className="pilier__subtitle-tag">{pillar.subtitle}</span>
                  <h3 className="pilier__title">{pillar.title}</h3>
                </div>

                <p className="pilier__description">{pillar.description}</p>

                <ul className="pilier__features">
                  {pillar.features.map((f, i) => (
                    <li key={i} className="pilier__feature">
                      <span className="pilier__feature-dot" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="pilier__cta"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                >
                  <span>Initier ce type de mission</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
