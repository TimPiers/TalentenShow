  export function removeTimeFromDate(date: string) {
    return date.substring(0, 10);
  }

  export function calcDateDifferenceInDays(dateString: string) {
    let date: Date = new Date(dateString);
    let today = new Date();
    let diff: number = Math.abs(date.getTime() - today.getTime());
    let diffDays: number = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays;
  }
