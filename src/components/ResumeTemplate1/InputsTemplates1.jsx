import './style.css';

const Inputs = ({
    setName,
    setAbout,
    setAddress,
    setContact,
    setObjective,
    setFormation,
    setCompleteActivities,
    setResumeSkills,
    setInformationComplement
}) => {
    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    return (
        <div className="input-container">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nome Completo:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Digite seu nome completo"
                        onChange={handleInputChange(setName)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="aboutMe">Sobre Mim:</label>
                    <input
                        type="text"
                        id="aboutMe"
                        placeholder="Digite algo sobre você"
                        onChange={handleInputChange(setAbout)}
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
                    <label htmlFor="contact">Contato:</label>
                    <input
                        type="text"
                        id="contact"
                        placeholder="Digite seu número ou e-mail"
                        onChange={handleInputChange(setContact)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="objective">Objetivo:</label>
                    <input
                        type="text"
                        id="objective"
                        placeholder="Digite seu objetivo profissional"
                        onChange={handleInputChange(setObjective)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="formation">Formação:</label>
                    <textarea
                        id="formation"
                        placeholder="Digite sua formação acadêmica"
                        onChange={handleInputChange(setFormation)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="completeActivities">Atividades Complementares:</label>
                    <textarea
                        id="completeActivities"
                        placeholder="Digite suas atividades complementares"
                        onChange={handleInputChange(setCompleteActivities)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="resumeSkills">Resumo de Qualificações:</label>
                    <textarea
                        id="resumeSkills"
                        placeholder="Digite suas habilidades"
                        onChange={handleInputChange(setResumeSkills)}
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
}

export default Inputs;
