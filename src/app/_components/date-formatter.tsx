import {parseISO, format} from "date-fns";
import {tr} from 'date-fns/locale';

type Props = {
    dateString: string;
};

const DateFormatter = ({dateString}: Props) => {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>
        {format(date, "d LLLL yyyy", {locale: tr})}
    </time>;
};

export default DateFormatter;
