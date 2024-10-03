import React from 'react';
import './style.css';

const InputsTemplate2 = ({
    setName,
    setEmail,
    setContact,
    setAboutMe,
    setFormation,
    setExperience
}) => {
    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    return (
        <div className="form-container">
            <form>
                <div className="form-group">
                    <label htmlFor="nameInput">Nome Completo:</label>
                    <input
                        type="text"
                        id="nameInput"
                        placeholder="Digite seu nome completo"
                        onChange={handleInputChange(setName)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu email"
                        onChange={handleInputChange(setEmail)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="contact">Contato:</label>
                    <input
                        type="tel"
                        id="contact"
                        placeholder="Digite seu contato"
                        onChange={handleInputChange(setContact)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="aboutMe">Sobre Mim:</label>
                    <input
                        type="text"
                        id="aboutMe"
                        placeholder="Fale um pouco sobre você"
                        onChange={handleInputChange(setAboutMe)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="formation">Formação:</label>
                    <textarea
                        id="formation"
                        placeholder="Digite sua formação"
                        onChange={handleInputChange(setFormation)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="experience">Experiência:</label>
                    <textarea
                        id="experience"
                        placeholder="Digite sua experiência"
                        onChange={handleInputChange(setExperience)}
                    />
                </div>
            </form>
        </div>
    );
};

export default InputsTemplate2;
