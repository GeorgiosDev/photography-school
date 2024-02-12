import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid'
import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Benefit from './Benefit'

// Benefits Array
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6 " />,
    title: 'State of the art Facilities',
    description:
      'We don’t just show you great photography – we teach you how to do it!',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: 'Dozen of amazing instructors',
    description:
      'Award winning professionals to teach you and guide you through the whole process',
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Free photography tutorials',
    description:
      "From little-known pro tips to fun photography outings, you're sure to be enthused and inspired.  ",
  },
]



const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full width-5/6 pt-14 ">
      <motion.div
        className="md:flex  mx-auto w-5/6  items-end justify-center md:h-1/4"
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header Section */}
        <motion.div
          className="md:my:5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN A SCHOOL</HText>
          <p className="my-5 text-sm">
            Since 2002 we've been training people to take beautiful photographs.
            By investing in our education, you'll be giving yourself the
            clearest, most concise and enjoyable photography training in the
            world.
          </p>
        </motion.div>
        {/* Benefits section */}
        <motion.div
          className=" md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => {
            return (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            )
          })}
        </motion.div>
        
      </motion.div>
    </section>
  )
}

export default Benefits
