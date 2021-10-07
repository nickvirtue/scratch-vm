/* eslint-disable @typescript-eslint/no-unused-vars */

class ReportObjectTypeBlock implements Block {
  constructor(private ignore: OcleaLowCodeAI) {}

  generate = (opFunction: string) => {
    return makeBlockData(opFunction, {
      text: `[${OBJECT}] is [${TYPE}]`,
      blockType: BlockType.BOOLEAN,
      arguments: {
        [OBJECT]: {
          type: ArgumentType.NUMBER,
            defaultValue: -1,

        },
        [TYPE]: {
          type: ArgumentType.NUMBER,
          menu: TypeMenu.ID,
          defaultValue: 0,
        },
      },
    });
  };
  opCode({ OBJECT, TYPE }: Props) {
    const result = Number(OBJECT) === Number(TYPE);
    if (result) {
        console.log(`${getTypeByIndex(OBJECT)} is ${getTypeByIndex(TYPE)} = ${result}`);
    }
    return result;
  }
}
