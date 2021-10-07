/* eslint-disable @typescript-eslint/no-unused-vars */

const TypeMenu: MenuData = {
  ID: "TYPE_MENU",
  items: ["Face", "Person", "Pet", "Dog", "Cat"],
};

const getTypeByIndex = (index: number) => TypeMenu.items[index]

const ageMenu: MenuData = {
  ID: "AGE_MENU",
  items: ["Unknown", "Recognised"],
};

const getAgeByIndex = (index: number) => ageMenu.items[index]
