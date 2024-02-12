import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '@/shared/types';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

  const handleClick = () => {
    setSelectedPage(lowerCasePage);
    const targetElement = document.getElementById(lowerCasePage);
    if (targetElement) {
      console.log('Target element found:', targetElement);
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error(`Element with id '${lowerCasePage}' not found`);
    }
  };

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={handleClick}
      className={`${
        selectedPage === lowerCasePage ? 'text-primary-500' : ''
      } transition duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
};


export default Link;
