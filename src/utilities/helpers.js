

//Date formatter
export function formatDate(inputDate) {
    const options = { month: 'long', year: 'numeric' };
    const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options);
    
    return formattedDate;
}