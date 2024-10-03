export function ValidationForm2 (formData) {
    const { name, email, contact, formation, aboutMe, experience } = formData;

    const errors = [];

    !name && errors.push('Por favor digite o campo de Nome completo!!');

    !email && errors.push('Por favor digite o campo de Email!!');

    !contact && errors.push('Por favor digite o campo de Contato!!');

    !formation && errors.push('Por favor digite o campo de Formação!!');

    !aboutMe && errors.push('Por favor digite o campo de Sobre Mim!!');

    !experience && errors.push('Por favor digite o campo de Experiência Profissional!!');

    return errors;
}