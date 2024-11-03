import React, { useState } from 'react';
import './faq.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome icon
import { faQuestionCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Зараркунандаларни йўқ қилиш қандай амалга оширилади?",
      answer: "Зараркунандаларни йўқ қилиш учун махсус дори воситалари ва технологиялардан фойдаланилади. Ҳар бир жараён сақланган хавфсизлик талабларига мувофиқ амалга оширилади."
    },
    {
      question: "Сиз фойдаланадиган дорилар хавфлими?",
      answer: "Биз фойдаланадиган дорилар лицензияланган ва инсон соғлиғига хавфсиз. Барча маҳсулотлар хавфсизлик стандартларига мувофиқ келади."
    },
    {
      question: "Менга уйимни даволанишга тайёрлашнинг қандайдир усули керакми?",
      answer: "Ҳа, уйни даволанишга тайёрлаш керак. Мебелларни силжитиш, озиқ-овқат ва идишларни ёпиқ жойларда сақлаш каби тадбирларни бажариш муҳим."
    }
  ];

  return (
    <section id='faq'>
    <div className="faq-container">
      <h1 className="faq-title">ФAҚ</h1>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div 
            className="faq-question" 
            onClick={() => toggleFaq(index)}
          >
            <FontAwesomeIcon icon={faQuestionCircle} className="faq-icon" />
            {faq.question}
            <span className={`faq-arrow ${openIndex === index ? 'open' : ''}`}>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </div>
          <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Faq;
