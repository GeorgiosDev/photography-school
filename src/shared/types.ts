export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  About = 'about',
  ContactUs = 'contactus',
  Courses = "courses"
}

export interface BenefitType {
  icon: JSX.Element
  title: string
  description: string
}

export const features: string[] = [
  'Unlimited access to all courses.',
  '1000’s of videos, worksheets, lighting set-ups, Lightroom presets, Raw files and much more.',
  'Critiques of student’s Work.',
  'Monthly assignments.',
  'Competitions.',
  'Exclusive members discounts on photography brands and services.',
  'Live Q&A sessions with pro photographers.',
  'Personalised support.',
  'Learn in your own time at your own pace.',
  'Join our learning community and get feedback on your work in our members only groups.',
]
