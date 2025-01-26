const daysBetweenDates = (date1: Date, date2: Date): number => {
    const diffInMs = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
};

export default daysBetweenDates;