export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-EN", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
