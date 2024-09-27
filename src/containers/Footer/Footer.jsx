import './Footer.css';
import ItemList from '../../components/ItemList.jsx';
import { BsSpotify } from 'react-icons/bs';
import { FaFacebook, FaPinterest, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

function Footer() {

  const importantInfoData = [
    {
      title: 'About us',
      itemArray: ['Our Company', 'Our Coffee', 'Stories and News', 'Starbucks Archive', 'Investor Relations', 'Customer Service', 'Contact Us']
    },
    {
      title: 'Careers',
      itemArray: ['Culture and Values', 'Inclusion, Diversity, and Equity', 'College Achievement Plan', 'Alumni Community', 'U.S. Careers', 'International Careers']
    },
    {
      title: 'Social Impact',
      itemArray: ['People', 'Planet', 'Environmental and Social Impact Reporting']
    },
    {
      title: 'For Business Partners',
      itemArray: ['Landlord Support Center', 'Suppliers', 'Corporate Gift Card Sales', 'Office and Foodservice Coffee']
    },
    {
      title: 'Order and Pick Up',
      itemArray: ['Order on the App', 'Order on the Web', 'Delivery', 'Order and Pick Up Options', 'Explore and Find Coffee for Home']
    }
  ]

  const iconStyles = {
    'width': '32px',
    'height': '32px'
  }

  const socialLogos = [<BsSpotify style={iconStyles} />, <FaFacebook style={iconStyles} />, <FaPinterest style={iconStyles} />, <FaInstagram style={iconStyles} />, <FaYoutube style={iconStyles} />, <FaTwitter style={iconStyles} />]

  const legalList = [
    'Privacy notice',
    'Consumer Health Privacy Notice',
    'Terms of use',
    'Do Not Share My Personal Information',
    'CA Supply Chan Act',
    'Accessibility',
    'Cookie Preferences'
  ]

  return (
    <div className="Footer">
        {importantInfoData.map(({ title, itemArray }, index) => <ItemList key={index} title={title} itemArray={itemArray} />)}
      <ul className="social-icons-list">
        {socialLogos.map((icon, index) => <li key={index}>{icon}</li>)}
      </ul>
        {legalList.map((title, index) => <ItemList key={index} title={title} />)}
        <span className='footer-advice'>This is a clone site, it is not used for other reason than academic purpose, it is meant to be used as a the official site</span>
    </div>
  );
}

export default Footer;
