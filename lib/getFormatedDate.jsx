export default function getFormatedDate(dateString) {
    return new Intl.DateTimeFormat("en-US", {dateStyle: "long"}).format(new Date(dateString));
}