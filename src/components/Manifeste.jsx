import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '98%', label: 'Taux de rétention\nà 18 mois' },
  { value: '72h', label: 'Délai de premier\nretour qualifié' },
  { value: '100%', label: 'Discrétion\nabsolue garantie' },
]

const principles = [
  {
    number: '01',
    title: 'La Discrétion Absolue',
    body: 'Chaque mission est conduite sous sceau de confidentialité. Ni votre nom, ni votre marque employeur ne circulent sans votre consentement explicite. Nous opérons dans l\'ombre pour que vos décisions brillent en pleine lumière.',
  },
  {
    number: '02',
    title: 'L\'Approche Directe',
    body: 'Nous ne publions pas d\'annonces. Nous identifions, approchons et convainquons les profils déjà en poste — ceux que vos concurrents n\'ont pas encore su séduire. La chasse de tête dans sa forme la plus pure.',
  },
  {
    number: '03',
    title: 'L\'Excellence Sans Compromis',
    body: 'Nous refusons l\'urgence irrationnelle et la quantité superficielle. Chaque candidature soumise est le résultat d\'un processus de sélection exigeant, calibré sur vos standards culturels et stratégiques.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Manifeste() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="manifeste" ref={sectionRef} className="manifeste">
      {/* Top accent line */}
      <div className="manifeste__accent-line" />

      <div className="container">
        {/* Header */}
        <motion.div
          className="manifeste__header"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span className="section-eyebrow" variants={itemVariants}>
            Notre Manifeste
          </motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            Là où les autres chasseurs de tête{' '}
            <em>s'arrêtent</em>,<br />
            nous commençons.
          </motion.h2>
          <motion.p className="manifeste__intro" variants={itemVariants}>
            LPartners est un cabinet de conseil en recrutement dédié aux secteurs du luxe, de la gastronomie de prestige et de l'immobilier d'exception. Nous n'intervenons que sur des mandats exigeants, pour des organisations qui refusent la médiocrité.
          </motion.p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="manifeste__stats"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} className="manifeste__stat" variants={itemVariants}>
              <span className="manifeste__stat-value">{stat.value}</span>
              <span className="manifeste__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Principles Grid */}
        <motion.div
          className="manifeste__principles"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {principles.map((p) => (
            <motion.div key={p.number} className="manifeste__principle" variants={itemVariants}>
              <span className="manifeste__principle-number">{p.number}</span>
              <div className="manifeste__principle-body">
                <h3 className="manifeste__principle-title">{p.title}</h3>
                <p className="manifeste__principle-text">{p.body}</p>
              </div>
              <div className="manifeste__principle-line" />
            </motion.div>
          ))}
        </motion.div>

        {/* Pull Quote */}
        <motion.blockquote
          className="manifeste__quote"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="manifeste__quote-mark">"</span>
          <p>Le talent que vous cherchez n'est pas en train de consulter les offres d'emploi.<br />Il est en train d'exceller là où il est — jusqu'à ce que nous l'appelions.</p>
          <cite>— La philosophie LPartners</cite>
        </motion.blockquote>
      </div>
    </section>
  )
}
