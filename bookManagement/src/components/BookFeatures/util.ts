import dayjs, {Dayjs} from "dayjs";

export const getDateStringFromDayJs = (date: Dayjs):  String => {
    return date.format('YYYY/MM/DD')
}