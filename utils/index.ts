export const objectKeys = <Obj extends {}>(obj: Obj): (keyof Obj)[] =>
  Object.keys(obj) as (keyof Obj)[];

export const objectEntries = <Obj extends {}>(
  obj: Obj
): [keyof Obj, Obj[keyof Obj]][] =>
  Object.entries(obj) as [keyof Obj, Obj[keyof Obj]][];

export function secondsLeft(date: string) {
  const now = new Date().getTime();
  const targetDate = new Date(date).getTime();
  return Math.floor((targetDate - now) / 1000);
}
