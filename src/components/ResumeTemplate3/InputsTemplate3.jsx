import './style.css';

const InputsTemplate3 = ({
    setName,
    setEmail,
    setContact,
    setAddress,
    setObjective,
    setExperience,
    setEducation,
    setSkills,
}) => {
    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    return (
        <div className="input-container">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Digite seu nome"
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
                    <label htmlFor="address">Endereço:</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Digite seu endereço"
                        onChange={handleInputChange(setAddress)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="objective">Objetivo:</label>
                    <textarea
                        id="objective"
                        placeholder="Digite seu objetivo"
                        onChange={handleInputChange(setObjective)}
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

                <div className="form-group">
                    <label htmlFor="education">Educação:</label>
                    <textarea
                        id="education"
                        placeholder="Digite sua formação"
                        onChange={handleInputChange(setEducation)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="skills">Habilidades:</label>
                    <textarea
                        id="skills"
                        placeholder="Digite suas habilidades"
                        onChange={handleInputChange(setSkills)}
                    />
                </div>
            </form>
        </div>
    );
};

export default InputsTemplate3;
