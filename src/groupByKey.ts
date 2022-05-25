type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const valueToGroupBy = String(item[key]);

    if (!groupedObject[valueToGroupBy]) {
      groupedObject[valueToGroupBy] = [];
    }
    groupedObject[valueToGroupBy].push(item);
  });

  return groupedObject;
}
