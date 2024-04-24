import dayjs, {Dayjs} from "dayjs";

export const getDateStringFromDayJs = (date: Dayjs):  string => {
    return date.format('YYYY-MM-DD')
}