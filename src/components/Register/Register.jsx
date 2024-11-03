import React, { useEffect, useState } from 'react';
import './register.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import workerImage from '../../assets/images/worker.png';
import axios from 'axios';
import Alert from '../../components/Alert/Alert';

const Register = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [alert, setAlert] = useState({ show: false, message: '', type: '' });

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        });
    }, []);

    const sendMessageToTelegram = async (e) => {
        e.preventDefault();
        const botToken = '8199811866:AAHyhsP1WSpah8GT2YGTBCzskAy_mn_GaVw';
        const chatId = '7251438309';
        const message = `Yangi xabar:\nName: ${name}\nPhone: ${phone}`;

        try {
            await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                chat_id: chatId,
                text: message,
            });
            setAlert({ show: true, message: "Xabaringiz muvaffaqiyatli jo'natildi!", type: 'success' });
            setName('');
            setPhone('');
        } catch (error) {
            console.error("Error sending message:", error);
            setAlert({ show: true, message: "Xabarni jo'natishni ilojisi bo'lmadi.", type: 'error' });
        }

        // Hide the alert after 5 seconds
        setTimeout(() => setAlert({ show: false, message: '', type: '' }), 5000);
    };

    return (
        <div className="container">
            {/* Conditionally render the Alert component */}
            {alert.show && <Alert message={alert.message} type={alert.type} />}
            
            <div className="centered-container" data-aos="fade-up">
                <div className="register-container">
                    <div className="form-box" data-aos="fade-right">
                        <h2>Маълумотингизни қолдиринг</h2>
                        <input
                            type="text"
                            placeholder="Исмингиз"
                            className="input-field"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="tel"
                            placeholder="+998-90-123-45-67"
                            className="input-field"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <button onClick={sendMessageToTelegram} className="submit-button">
                            Юбориш
                        </button>
                    </div>
                    <div className="image-container" data-aos="fade-left">
                        <img src={workerImage} alt="Disinfection Worker" className="worker-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
