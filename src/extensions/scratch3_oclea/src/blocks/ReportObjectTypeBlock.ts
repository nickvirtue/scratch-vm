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
          // defaultValue: "Object",
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
      // console.log(`${OBJECT} is ${TYPE} = ${result}`);
    }
    return result;
  }
}
