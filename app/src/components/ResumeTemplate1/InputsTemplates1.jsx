import './style.css';

const Inputs = ({
    setName,
    setAddress,
    setContact,
    setEmail,
    setObjective,
    setFormation,
    setCompleteActivities,
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
                        type="number"
                        id="contact"
                        placeholder="Digite seu número"
                        onChange={handleInputChange(setContact)}
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
                    <label htmlFor="completeActivities">Qualificação Profissional</label>
                    <textarea
                        id="completeActivities"
                        placeholder="Digite suas qualificações profissionais"
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
}

export default Inputs;
