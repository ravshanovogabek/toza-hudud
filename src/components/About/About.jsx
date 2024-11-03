import React, { useEffect } from 'react';
import './about.css';
import { SiThunderstore } from 'react-icons/si';
import { MdOutlineHandshake } from 'react-icons/md';
import { IoMdTimer } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import houseCleaningImage from '../../assets/images/tozalash1.jpg'; // Adjust the path accordingly

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of animation in milliseconds
      once: true,      // Whether animation should happen only once on scroll
    });
  }, []);

  return (
  <section id='about'>
    <div className="about-section">
      <h2 className="about-heading">Ҳақида</h2>

      <div className="about-cards">
        {/* First Card */}
        <div className="about-card" data-aos="fade-up">
          <div className="about-icon">
            <IoMdTimer size={40} /> {/* Adjust size as needed */}
          </div>
          <h3 className="about-title">Тезда Хизмат Кўрсатиш</h3>
          <p className="about-description">
            АРИЗАЛАР КУНИГА 24 СОАТ ҚАБУЛ ҚИЛИНАДИ. АГАР МУАММО ШОШИЛИНЧ БЎЛСА, БИЗ ДАРҲОЛ
            КЕТИШИМИЗ МУМКИН. ШУ БИЛАН БИРГА, СИФАТ МУКАММАЛ БЎЛИБ ҚОЛАДИ.
          </p>
        </div>

        {/* Second Card */}
        <div className="about-card" data-aos="fade-up" data-aos-delay="200">
          <div className="about-icon">
            <MdOutlineHandshake size={40} /> {/* Adjust size as needed */}
          </div>
          <h3 className="about-title">Йетук Мутаҳасисларимиз</h3>
          <p className="about-description">
            БИЗНИНГ ХОДИМЛАРИМИЗ ҲАММА НАРСАГА ҒАМХЎРЛИК ҚИЛАДИ: ҲИСОБ-КИТОБЛАР, ХОНАНИ ТАЙЁРЛАШ,
            ҚАЙТА ИШЛАШ, ЯКУНИЙ ТОЗАЛАШ, ВЕНТИЛЯТСИЯ ВА НАЗОРАТ ТЕКШИРУВИ.
          </p>
        </div>

        {/* Third Card */}
        <div className="about-card" data-aos="fade-up" data-aos-delay="400">
          <div className="about-icon">
            <SiThunderstore size={40} /> {/* Adjust size as needed */}
          </div>
          <h3 className="about-title">Сизга Мақул Вақтда</h3>
          <p className="about-description">
            СИЗ ЎЗИНГИЗ УЧУН МАҚУЛ ВА ҚУЛАЙ ВАҚТНИ ТАНЛАНГ ВА БИЗГА МУРОЖААТ ҚИЛИНГ. СИЗГА
            ҚАФОЛАТЛАНГАН ВА САМАРАЛИ НАТИЖАНИ ОЛИБ БОРАМИЗ.
          </p>
        </div>
      </div>

      {/* New Section with Full-width Image and Overlay Text */}
      <div className="image-text-section" data-aos="zoom-in">
        <img src={houseCleaningImage} alt="Descriptive Alt Text" className="full-width-image" />
        <div className="overlayer-text" data-aos="fade-up" data-aos-delay="600">
          <h2>Клапа ва зарарли ҳашорот энди йўқ деб ҳисобланг!!!</h2>
          <p>Бизнинг кўп йиллардан бери ўз фаолиятини олиб келаётган компаниямиз. Мижозларимиз биздан мамнун</p>
          <button className="contact-button">Богланиш</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
