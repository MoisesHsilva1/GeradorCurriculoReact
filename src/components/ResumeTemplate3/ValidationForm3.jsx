export function ValidationForm3(formData) {
    const { name, email, contact, address, objective, experience, education, skills } = formData;

    const errors = [];

    const fields = [
        { value: name, message: 'Por favor digite o campo de Nome completo!!' },
        { value: email, message: 'Por favor digite o campo de Email!!' },
        { value: contact, message: 'Por favor digite o campo de Contato!!' },
        { value: address, message: 'Por favor digite o campo de Endereço!!' },
        { value: objective, message: 'Por favor digite o campo de Objetivo!!' },
        { value: experience, message: 'Por favor digite o campo de Experiência!!' },
        { value: education, message: 'Por favor digite o campo de Educação!!' },
        { value: skills, message: 'Por favor digite o campo de Habilidades!!' },
    ]
    fields.forEach(({ value, message }) => !value && errors.push(message))
    return errors;
}