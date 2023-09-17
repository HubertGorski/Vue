export enum FILTER_STATUS {
  DONE = "done",
  UNDONE = "undone",
  ALL = "all",
}

export function getFilterStatus(index: number) {
  const filterStatuses = Object.values(FILTER_STATUS);
  return filterStatuses[index];
}
