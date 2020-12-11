import './App.css';
import logo from './asserts/logo.png';
import image1 from './asserts/image1.png';
import image2 from './asserts/image2.png';
import image3 from './asserts/image3.png';
import CallIcon from '@material-ui/icons/Call';
import facebook from './asserts/facebook.svg';
import LanguageIcon from '@material-ui/icons/Language';

function App() {
  return (
    <div className="app">
      <div className="app__logoContainer">
        <img className="app__logo" src={logo} alt=""></img>
      </div>
      <div className="app__banner">
        <div className="app__bannerRight">
          <img src={image1} alt=""></img>
        </div>
        <div className="app__bannerLeft">
          <h4> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
          <ul>
            <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
          </ul>
          <img src={image2} alt=""></img>
          <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
      <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
      <div className="app__product">
        <img className="product__image" src={image3} alt=""></img>
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
      </div>
      <hr className="line"></hr>
      <h4 style={{ textAlign: 'center', padding: '10px 20px' }}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
      <p style={{ textAlign: 'center' }}>PROCESS <span style={{ color: 'red' }}>|</span> POWER <span style={{ color: 'red' }}>|</span> WATER & WASTE WATER <span style={{ color: 'red' }}>|</span> OILS <span style={{ color: 'red' }}>|</span> & GAS <span style={{ color: 'red' }}>|</span> PHARMA <span style={{ color: 'red' }}>|</span> SUGARS & DISTILLERIES <span style={{ color: 'red' }}>|</span> PAPER & PULP <span style={{ color: 'red' }}>|</span> MARRINE & DIFFENCE <span style={{ color: 'red' }}>|</span> METAL & MINING <span style={{ color: 'red' }}>|</span> FOOD & BEBERAZE <span style={{ color: 'red' }}>|</span> PETROCHEMICAL <span style={{ color: 'red' }}>|</span> REFINERIES <span style={{ color: 'red' }}>|</span> SOLAR <span style={{ color: 'red' }}>|</span> BUILDING <span style={{ color: 'red' }}>|</span> HVAC <span style={{ color: 'red' }}>|</span> FIRE FIGHTING <span style={{ color: 'red' }}>|</span> AGRICULTURE & RESIDENTIAL</p>
      <div className="app__footer">
        <div>
          <CallIcon></CallIcon>Toll free 1800 200 12354
        </div>
        <div>
          <img className="facebookIcon" src={facebook} alt=""></img> www.facebook.com/cripumps
        </div>
        <div className="world">
          <LanguageIcon></LanguageIcon>www.cripumps.com
        </div>
      </div>
    </div>
  );
}

export default App;
