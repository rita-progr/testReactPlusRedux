export const formatDate = (dateString: string): string => {
    const date = new Date(dateString); // Преобразуем строку в объект Date
    const day = String(date.getDate()).padStart(2, '0'); // День (две цифры)
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяц (две цифры)
    const year = date.getFullYear(); // Год (четыре цифры)
    return `${day}.${month}.${year}`; // Формат dd.mm.yyyy
};