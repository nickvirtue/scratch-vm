/* eslint-disable @typescript-eslint/no-unused-vars */

class ReportObjectAgeBlock implements Block {
  constructor(private ignore: OcleaLowCodeAI) {}

  generate = (opFunction: string) => {
    return makeBlockData(opFunction, {
      text: `[${OBJECT}] is [${AGE}]`,
      blockType: BlockType.BOOLEAN,
      arguments: {
        [OBJECT]: {
          type: ArgumentType.NUMBER,
          defaultValue: -1,
        },
        [AGE]: {
          type: ArgumentType.NUMBER,
          menu: ageMenu.ID,
          defaultValue: 0,
        },
      },
    });
  };
  opCode({ OBJECT, AGE }: Props) {
    const obj = OBJECT;
    const ag = AGE;
    console.log(`OBJECT:${typeof obj} '${obj}'`);
    console.log(`AGE:${typeof ag} '${ag}'`);
    if (obj < 0) {
      console.log("No OBJECT");
      return false;
    }
    const result = ag > 0 ? obj < 2 : obj >= 2;
    // if (result) {
    console.log(`(${ag} > 0 ? ${obj} < 2 : ${obj} >= 2) => ${result}`);
    // }
    return result;
  }
}
