export function ValidationForm(formData) {
  const {
    name,
    about,
    address,
    contact,
    objective,
    formation,
    completeActivities,
    resumeSkills,
    informationComplement,
  } = formData;

  const errors = [];

  const fields = [
    { value: name, message: 'Por favor digite o campo de Nome completo!!' },
    { value: about, message: 'Por favor digite o campo de Sobre Mim!!' },
    { value: address, message: 'Por favor digite o campo de Endereço!!' },
    { value: contact, message: 'Por favor digite o campo de Contato!!' },
    { value: objective, message: 'Por favor digite o campo de Objetivo!!' },
    { value: formation, message: 'Por favor digite o campo de Formação!!' },
    { value: completeActivities, message: 'Por favor digite o campo de Atividades Complementares!!' },
    { value: resumeSkills, message: 'Por favor digite o campo de Habilidades!!' },
    { value: informationComplement, message: 'Por favor digite o campo de Informações Complementares!!' },
  ];

  fields.forEach(({ value, message }) => !value && errors.push(message));

  return errors;
}
