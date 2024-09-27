import './Main.css';
import image1 from '../../static/image1.png'
import image2 from '../../static/image2.png'
import image3 from '../../static/image3.png'
import image4 from '../../static/image4.png'
import image5 from '../../static/image5.png'
import image6 from '../../static/image6.png'
import MainFragment from '../../components/MainFragment';

function Main() {
  return (
    <div className="Main">
      <MainFragment Url={image1} buttonText='Send an eGift'/>
      <MainFragment Url={image2} reverse={true} buttonText='Join Starbucks Rewards'/>
      <MainFragment Url={image3} buttonText='Order now'/>
      <MainFragment Url={image4} reverse={true} buttonText='Join now'/>
      <MainFragment Url={image5} buttonText='Order now'/>
      <MainFragment Url={image6} reverse={true} buttonText='Order now'/>
      <p className='main-bottom-desc'>***25% off your Starbucks order on Uber Eats from 9/23-9/29. Max discount of $6. Fees and taxes still apply. Menu limited. See the Uber Eats app for availability & restrictions.</p>
    </div>
  );
}

export default Main;
