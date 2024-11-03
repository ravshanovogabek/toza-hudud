import React from 'react';
import './service.css';

// Importing images from the assets folder
import klapalarImg from '../../assets/images/klopi.jpg';
import tarakanlarImg from '../../assets/images/tarakan.jpg';
import chaenImg from '../../assets/images/chayon.jpg';

// Import the uploaded image for the guarantee section
import guaranteeImg from '../../assets/images/tozalash3.jpg'; // Ensure this path is correct

// SVG guarantee icon
const GuaranteeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="guarantee-icon"
  >
    <path d="M12 22s8-4 8-10V5l-8-4-8 4v7c0 6 8 10 8 10z"></path>
    <polyline points="9 11 12 14 16 10"></polyline>
  </svg>
);

const service = [
  {
    title: 'КЛАПАЛАР',
    description: `Улар тўшакда, юмшоқ мебелда, тўқимачиликда, эшик ромлари ва
      дерaза ромлари остида яшайдилар. Улар одамлар ва иссиқ қонли
      ҳайвонларнинг қони билан озиқланади. Аллергия ва оғир психологик
      ноқулайликни кўзгатинг...`,
    imageUrl: klapalarImg,
  },
  {
    title: 'ТАРАКАНЛАР',
    description: `Улар патогенларни олиб юрадилар. Улар ёрикларда, тақлиқ тагида,
      мебель орқасида, ҳаммом остида, шкафлар остида ва ҳоказоларда яшайдилар.
      Улар озиқ-овқат, маиший чиқиндилар, чарм буюмлар ва қоғоз билан
      озиқланадилар.`,
    imageUrl: tarakanlarImg,
  },
  {
    title: 'ЧАЁН',
    description: `Ҳашаротлар ва арахнидлар билан озиқланадиган иссиқликни яхши
      кўрадиган жонзотлар. Улар омборларда ва уйларда яшашлари мумкин,
      лекин кўпинча улар ёғоч биноларда топиладимаиший чиқиндилар, чарм буюмлар ва `,
    imageUrl: chaenImg,
  },
];

const Service = () => {
  return (
    <div className="service-container">
      <h1 className="service-title">Хизмат тури</h1>
      <div className="service-cards">
        {service.map((service, index) => (
          <div key={index} className="service-card">
            <h2 className="service-card-title">{service.title}</h2>
            <p className="service-card-description">{service.description}</p>
            <div className="service-card-image">
              <img src={service.imageUrl} alt={service.title} />
            </div>
            <button className="contact-button">Богланиш</button>
          </div>
        ))}
      </div>

      {/* Guarantee Image Section */}
      <div className="guarantee-section">
        <img src={guaranteeImg} alt="Guarantee" className="guarantee-image" />
        <div className="guarantee-text">
          <div className="guarantee-header">
            <GuaranteeIcon /> {/* Guarantee Icon */}
            <p>Рамий кафолат - 1 йил</p>
          </div>
          <p>Биз жисмоний ва юридик шахсларга хизмат курсатамиз. Хизматлар лицензияланган!!!</p>
          <button className="contact-button">Богланиш</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
