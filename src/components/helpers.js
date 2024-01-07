
function formatDate(dateInput) {
    //Format date
    const formatOptions = { month: "long", year: "numeric"};
    const formatedDate = new Date(dateInput).toLocaleDateString('en-US', formatOptions);

    return formatedDate;
}