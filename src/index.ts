type Dates = {
  startDate: string;
  endDate: string;
};

function extractDates(customer: any): Dates[] | string[] {
  const periods: Dates[] = [];
  const errorString = "string length is invalid";

  if (
    customer.ListOfPeriods &&
    customer.ListOfPeriods.toLowerCase() !== "null"
  ) {
    const periodsArray = customer.ListOfPeriods.split("|");

    for (const period of periodsArray) {
      const trimmedPeriod = period.trim();
      const dates = trimmedPeriod.split("-");

      if (dates.length === 2) {
        const startDate = dates[0].trim();
        const endDate = dates[1].trim();

        if (startDate.length === 10 && endDate.length === 10) {
          periods.push({
            startDate,
            endDate
          });
        } else {
          return [errorString];
        }
      } else {
        return [errorString];
      }
    }
  } else {
    return [];
  }

  return periods;
}

export default extractDates;
