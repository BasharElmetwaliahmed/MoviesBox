export default function extractYearFromDate(dateString) {
  // Split the date string into an array using the "-" delimiter
  if(!dateString) return null
  const dateParts = dateString.split("-");

  // Check if the date string has at least one element (the year)
  if (dateParts.length >= 1) {
    // Extract the year (the first element in the array)
    const year = parseInt(dateParts[0]);

    // Check if the extracted year is a valid number
    if (!isNaN(year)) {
      return year;
    }
  }

  // Return an error message or handle invalid input as needed
  return "Invalid date format";
}