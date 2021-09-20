export const millisecondsToDate = (timeInMilliseconds: number) => {
  const date = new Date(timeInMilliseconds);

  return date;
};

export const dateToMilliseconds = (_date: string) => {
  const date = new Date(_date);

  return date;
};
