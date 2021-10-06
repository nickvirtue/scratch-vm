/* eslint-disable @typescript-eslint/no-unused-vars */

class CommandTestBlock implements Block {
  constructor(private ignore: OcleaLowCodeAI) {}

  generate = (opFunction: string) => {
    const result = makeBlockData(opFunction, {
      text: `Test [${OBJECT}] is [${TYPE}]`,
      blockType: BlockType.BOOLEAN,
      arguments: {
        [OBJECT]: {
          type: ArgumentType.STRING,
          defaultValue: "Object",
        },
        [TYPE]: {
          type: ArgumentType.NUMBER,
          menu: TypeMenu.ID,
          defaultValue: 0,
        },
      },
    });
    console.log("CommandTestBlock.generate ============================");
    console.log(result);
    console.log("end ========= ===================");
    return result;
  };
  opCode = ({ OBJECT, TYPE }: Props) => {
    console.log(`Test ${OBJECT} is ${TYPE}`);
  };
}
