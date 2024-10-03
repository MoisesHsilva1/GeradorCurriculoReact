export function ValidationForm3 (formData) {
    const {name, email, contact, address, objective, experience, education, skills} = formData;

    const errors = [];

    !name && errors.push('Por favor digite o campo de Nome completo!!');

    !email && errors.push('Por favor digite o campo de Email!!');

    !contact && errors.push('Por favor digite o campo de Contato!!');

    !address && errors.push('Por favor digite o campo de Endereço!!');

    !objective && errors.push('Por favor digite o campo de Objetivo!!');    

    !experience && errors.push('Por favor digite o campo de Experiência!!');

    !education && errors.push('Por favor digite o campo de Educação!!');

    !skills && errors.push('Por favor digite o campo de Habilidades!!');

    return errors;
}