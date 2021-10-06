/* eslint-disable @typescript-eslint/no-unused-vars */

interface MenuData {
  ID: string;
  items: string[];
}

const mapMenuItems = (items: string[]) =>
  items.map((item, index) => ({ text: item, value: index }));

const mapMenu = ({ ID, items }: MenuData) => ({
  [ID]: {
    acceptReporters: true,
    items: mapMenuItems(items),
  },
});
