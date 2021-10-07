/* eslint-disable @typescript-eslint/no-unused-vars */

class ReportObjectDetectedBlock implements Block {
  constructor(private ignore: OcleaLowCodeAI) {}

  generate = (opFunction: string) => {
    return makeBlockData(opFunction, {
      text: `[${OBJECT}] Detected`,
      blockType: BlockType.REPORTER,
      arguments: {
          [OBJECT]: {
          type: ArgumentType.NUMBER,
          menu: TypeMenu.ID,
          defaultValue: 0,
        },
      },
    });
  };
  opCode({ OBJECT }: Props) {
    // console.log(`Detected ${getTypeByIndex(OBJECT)}`);
    return OBJECT;
  }
}
