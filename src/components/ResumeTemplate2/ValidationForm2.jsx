export function ValidationForm2(formData) {
    const { name, email, contact, formation, aboutMe, experience } = formData;

    const errors = [];

    const fields = [
        { value: name, message: 'Por favor digite o campo de Nome completo!!' },
        { value: email, message: 'Por favor digite o campo de Email!!' },
        { value: contact, message: 'Por favor digite o campo de Contato!!' },
        { value: formation, message: 'Por favor digite o campo de Formação!!' },
        { value: aboutMe, message: 'Por favor digite o campo de Sobre Mim!!' },
        { value: experience, message: 'Por favor digite o campo de Experiência Profissional!!' },
    ]
    fields.forEach(({ value, message }) => !value && errors.push(message))
    return errors;
}