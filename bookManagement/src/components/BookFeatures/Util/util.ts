import dayjs, {Dayjs} from "dayjs";

export const getDateStringFromDayJs = (date: Dayjs):  string => {
    return date.format('YYYY-MM-DD')
}

export const getUUIDString = () => {
    return getUUID().replace(/-/g, '')
}

const getUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

