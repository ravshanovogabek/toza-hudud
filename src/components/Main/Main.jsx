import React, { useEffect } from 'react';
import './main.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS for animations
import disinfectImage from '../../assets/images/diza.jpg';

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with custom settings
  }, []);

  return (
    <div className="disinfection-service">
      <div className="text-container" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <h1>Дезинфекция 
             хизмати</h1>
        <p>
          Биз Тошкентда 10 йилдан бери профессионал дезинфекция ишларини олиб борамиз,
          шунинг учун биринчи марта зараркунандалардан қандай қутулишни биламиз.
        </p>
        <button className="contact-button ios-button">Боғланиш</button>
      </div>
      <div className="image-container" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1000">
        <img src={disinfectImage} alt="Disinfection Service" className="disinfect-image" />
      </div>
    </div>
  );
};

export default Main;
