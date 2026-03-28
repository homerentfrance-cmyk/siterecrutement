import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const MISSION_TYPES = [
  'Recrutement au Succès',
  'Recrutement sur Acompte (Retainer)',
  'Approche Directe Pure',
  'Conseil & Orientation',
]

const SECTORS = [
  'Gastronomie de Prestige',
  'Hôtellerie de Luxe',
  'Immobilier d\'Exception',
  'Autre secteur du luxe',
]

export default function Contact() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    missionType: '',
    sector: '',
    message: '',
  })
  const [focused, setFocused] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="contact" ref={sectionRef} className="contact">
      <div className="container">
        <div className="contact__grid">
          {/* Left — Info */}
          <motion.div
            className="contact__info"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.span className="section-eyebrow" variants={itemVariants}>
              Contact
            </motion.span>
            <motion.h2 className="section-title contact__title" variants={itemVariants}>
              Initions<br />
              <em>une conversation.</em>
            </motion.h2>
            <motion.p className="contact__description" variants={itemVariants}>
              Chaque grande mission commence par un entretien de découverte. Confidentiel. Sans engagement. Partagez votre besoin — nous vous dirons si nous pouvons l'honorer.
            </motion.p>

            <motion.div className="contact__details" variants={containerVariants}>
              <motion.div className="contact__detail" variants={itemVariants}>
                <span className="contact__detail-label">Email</span>
                <a href="mailto:contact@lpartners.fr" className="contact__detail-value">
                  contact@lpartners.fr
                </a>
              </motion.div>
              <motion.div className="contact__detail" variants={itemVariants}>
                <span className="contact__detail-label">Téléphone</span>
                <a href="tel:+33100000000" className="contact__detail-value">
                  +33 (0)1 00 00 00 00
                </a>
              </motion.div>
              <motion.div className="contact__detail" variants={itemVariants}>
                <span className="contact__detail-label">Confidentialité</span>
                <span className="contact__detail-value contact__detail-value--small">
                  Toutes les demandes sont traitées avec la plus stricte confidentialité.
                </span>
              </motion.div>
            </motion.div>

            {/* Decorative vertical line */}
            <motion.div
              className="contact__info-line"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="contact__success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="contact__success-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="15" stroke="#C4956A" strokeWidth="1.5" />
                      <path d="M10 16l4 4 8-8" stroke="#C4956A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>Message transmis.</h3>
                  <p>Nous vous répondrons dans les 24 heures ouvrées, avec la discrétion que votre demande mérite.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="contact__form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Row 1 */}
                  <div className="form__row">
                    <div className={`form__field ${focused === 'name' || form.name ? 'form__field--active' : ''}`}>
                      <label className="form__label">Nom & Prénom *</label>
                      <input
                        type="text"
                        name="name"
                        className="form__input"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        required
                      />
                      <span className="form__underline" />
                    </div>
                    <div className={`form__field ${focused === 'company' || form.company ? 'form__field--active' : ''}`}>
                      <label className="form__label">Société</label>
                      <input
                        type="text"
                        name="company"
                        className="form__input"
                        value={form.company}
                        onChange={handleChange}
                        onFocus={() => setFocused('company')}
                        onBlur={() => setFocused(null)}
                      />
                      <span className="form__underline" />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="form__row">
                    <div className={`form__field ${focused === 'email' || form.email ? 'form__field--active' : ''}`}>
                      <label className="form__label">Email *</label>
                      <input
                        type="email"
                        name="email"
                        className="form__input"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        required
                      />
                      <span className="form__underline" />
                    </div>
                    <div className={`form__field ${focused === 'phone' || form.phone ? 'form__field--active' : ''}`}>
                      <label className="form__label">Téléphone</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form__input"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                      />
                      <span className="form__underline" />
                    </div>
                  </div>

                  {/* Row 3 — Selects */}
                  <div className="form__row">
                    <div className={`form__field form__field--select ${focused === 'missionType' || form.missionType ? 'form__field--active' : ''}`}>
                      <label className="form__label">Type de mission *</label>
                      <select
                        name="missionType"
                        className="form__input form__select"
                        value={form.missionType}
                        onChange={handleChange}
                        onFocus={() => setFocused('missionType')}
                        onBlur={() => setFocused(null)}
                        required
                      >
                        <option value="" disabled />
                        {MISSION_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <span className="form__underline" />
                      <svg className="form__select-arrow" width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className={`form__field form__field--select ${focused === 'sector' || form.sector ? 'form__field--active' : ''}`}>
                      <label className="form__label">Secteur</label>
                      <select
                        name="sector"
                        className="form__input form__select"
                        value={form.sector}
                        onChange={handleChange}
                        onFocus={() => setFocused('sector')}
                        onBlur={() => setFocused(null)}
                      >
                        <option value="" disabled />
                        {SECTORS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <span className="form__underline" />
                      <svg className="form__select-arrow" width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Message */}
                  <div className={`form__field form__field--full ${focused === 'message' || form.message ? 'form__field--active' : ''}`}>
                    <label className="form__label">Votre besoin en quelques mots</label>
                    <textarea
                      name="message"
                      className="form__input form__textarea"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      rows={4}
                    />
                    <span className="form__underline" />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    className="form__submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Transmettre ma demande</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.button>

                  <p className="form__disclaimer">
                    Vos informations sont traitées avec une stricte confidentialité et ne sont jamais transmises à des tiers.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
