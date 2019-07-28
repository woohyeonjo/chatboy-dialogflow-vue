export const util = {
    getNow() {
        const now = new Date();
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        const current = {
            date: `${now.getMonth()}월 ${now.getDate()}일 ${week[now.getDay()]}요일`,
            time: `${now.getHours()} : ${now.getMinutes()}`
        };
        return current;
    }
};