
function toBRDate(date) {
    const dataConsulta = new Date(date);
    const dia = dataConsulta.getDate().toString().padStart(2, '0');
    const mes = (dataConsulta.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataConsulta.getFullYear().toString();
    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
}

export default toBRDate;