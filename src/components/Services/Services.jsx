import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./services.css";
import mikrobImage from "../../assets/images/mikrob.png"; 
import klyapaImage from "../../assets/images/klyapa.png"; 
import sichqonImage from "../../assets/images/sichqon.png"; 

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with custom settings
  }, []);

  

  return (
    <section id="services">
    <div className="services-container">
      <h1 className="services-title" data-aos="fade-up">Хизматлар</h1>
      <p className="services-subtitle" data-aos="fade-up" data-aos-delay="100">
        Биз сизга самарали ва кафолатли хизмат такдим этамиз.
      </p>
      
      <div className="services-card" data-aos="fade-right">
        <img src={mikrobImage} alt="Disinfection" className="services-image" />
        <div className="services-description">
          <h2 className="services-title">Дезинфекция - зарарли микро организмларни йўқ қилиш</h2>
          <p className="services-text">
            Ҳар қандай дезинфекциянинг асосий вазифаси инфекцияларга ва касалликларга олиб
            келиши мумкин бўлган хавфли микроорганизмларни йўқ қилишдир.
          </p>
        </div>
      </div>
      
      <div className="services-card" data-aos="fade-left" data-aos-delay="200">
        <img src={klyapaImage} alt="Pest Control" className="services-image" />
        <div className="services-description">
          <h2 className="services-title">Пест контроль - зараркунандаларга қарши кураш</h2>
          <p className="services-text">
            Пест-контроль хизматлари зарарли ҳашаротлар ва ҳашаротларни самарали йўқ қилади.
          </p>
        </div>
      </div>
      
      <div className="services-card" data-aos="fade-right" data-aos-delay="300">
        <img src={sichqonImage} alt="Rodent Control" className="services-image" />
        <div className="services-description">
          <h2 className="services-title">Кемирувчиларга қарши кураш</h2>
          <p className="services-text">
            Кемирувчиларни йўқ қилиш уларни уй ва офисдан чиқариб ташлаш билан боғлиқ
            муаммоларни ҳал қилади.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Services;
