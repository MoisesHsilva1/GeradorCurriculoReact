import './style.css';

const InputsTemplate2 = ({
    setName,
    setEmail,
    setContact,
    setAddress,
    setObjective,
    setFormation,
    setInformationComplement,
    setCompleteActivities
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
                    <label htmlFor="address">Endereço:</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Digite seu endereço"
                        onChange={handleInputChange(setAddress)}
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
                        type="number"
                        id="contact"
                        placeholder="Digite seu contato"
                        onChange={handleInputChange(setContact)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="aboutMe">Objetivo:</label>
                    <input
                        type="text"
                        id="aboutMe"
                        placeholder="Fale um pouco sobre você"
                        onChange={handleInputChange(setObjective)}
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
                    <label htmlFor="completeActivities">Aperfeiçoamento e atividades complementares:</label>
                    <textarea
                        id="completeActivities"
                        placeholder="Digite suas atividades complementares"
                        onChange={handleInputChange(setCompleteActivities)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="informationComplement">Informações Complementares:</label>
                    <input
                        type="text"
                        id="informationComplement"
                        placeholder="Digite informações complementares"
                        onChange={handleInputChange(setInformationComplement)}
                    />
                </div>

            </form>
        </div>
    );
};

export default InputsTemplate2;
