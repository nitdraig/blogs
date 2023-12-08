export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
