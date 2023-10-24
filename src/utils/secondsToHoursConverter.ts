import duration from "dayjs/plugin/duration"
import dayjs from "dayjs"
dayjs.extend(duration)

export default function secondsToHoursConverter(timeInSec: number) {
    const time = dayjs.duration(timeInSec*1000).format("HH:mm:ss")
    return time
}