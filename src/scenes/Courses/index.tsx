import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import course1 from '@/assets/course-1.jpg'
import course2 from '@/assets/course-2.jpg'
import course3 from '@/assets/course-3.jpg'
import course4 from '@/assets/course-4.jpg'
import course5 from '@/assets/course-5.jpg'
import course6 from '@/assets/course-6.jpg'

const allCourses = [
  {
    title: 'Complete Guide to Lightroom',
    description:
      'An online Lightroom course for beginners and people wanting to fill gaps in their learning. Create stunning photography with full control over post-processing in Adobe Lightroom. Get structured, Lightroom training and become an expert in no time!',
    key: 1,
    image: course1,
  },
  {
    title: 'Studio Lighting Course',
    description:
      'An online studio lighting course teaching you how to start a photographic studio and how to use lighting equipment for portraiture. Set up your own professional studio with limited space, equipment and budget.',
    key: 2,
    image: course2,
  },
  {
    title: 'Long Exposure Photography Course',
    description:
      'A complete guide to long exposure photography with all you need to know about ND filters and how to post-process your photography for professional results.',
    key: 3,
    image: course3,
  },
  {
    title: 'Headshot Photography Course',
    description:
      'The ultimate guide to mastering Headshot Photography. Pose models, flash lighting set ups, working with natural light, pro retouching and gaining those top clients.',
    key: 4,
    image: course4,
  },
  {
    title: 'Photographing Cities at Night',
    description:
      "Capture the beauty of the city after dark with our 'Photographing Cities at Night' course. Join us on a captivating journey where you'll master the secrets of city night photography.",
    key: 5,
    image: course5,
  },
  {
    title: 'Beginner Photography Book',
    description:
      'For those who prefer physical products, here is a book for learners of photography. A great resource for any learning photographer.',
    key: 6,
    image: course6,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Courses = ({ setSelectedPage }: Props) => {
  return (
    <section id="courses" className="w-full ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Courses)}
        className="flex flex-col items-center justify-center text-center w-full"
      >
        {/* Info Text */}
        <motion.div
          className="md:w-full "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="md:w-full">
            <HText>OUR COURSES</HText>
            <p className="py-5 text-md">
              We have been teaching photography since 2002. Our courses are
              designed to take beginners to an advanced level or fill in the
              gaps that the more experienced photographer may have. Clear up
              confusion and create stunning imagery with structured professional
              teaching. We are based in the UK and provide the best in
              professional training worldwide.
            </p>
          </div>
        </motion.div>
        {/* Courses grid */}
        <motion.div
          className="md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-4">
            {allCourses.map((course) => (
              <div key={course.key} className="flex flex-col">
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover h-64 rounded-md"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-sm">{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Courses
