import { motion } from 'framer-motion'
import { features } from '@/shared/types'
import HText from '@/shared/HText'
import graphic from '@/assets/benefits-graphic.jpg'

const Features = () => {
  return (
    <div className="py-2 mx-auto px-8 flex flex-col md:flex-row gap-6 bg-primary-100">
      <motion.img
        src={graphic}
        alt="features"
        className="w-full md:w-[50%] h-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      />

      <motion.div
        className="w-full md:w-[50%] mt-4 md:mt-0 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex flex-col justify-center h-full ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <HText>ENDLESS FEATURES</HText>
          </motion.div>
          <motion.ul
            className="list-disc mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>
  )
}

export default Features
