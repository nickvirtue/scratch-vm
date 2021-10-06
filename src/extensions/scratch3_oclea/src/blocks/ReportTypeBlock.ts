/* eslint-disable @typescript-eslint/no-unused-vars */

class ReportTypeBlock implements Block {
  constructor(private ignore: OcleaLowCodeAI) {}

  generate = (opFunction: string) => {
    return makeBlockData(opFunction, {
      text: `[${TYPE}]`,
      blockType: BlockType.REPORTER,
      arguments: {
        [TYPE]: {
          type: ArgumentType.NUMBER,
          menu: TypeMenu.ID,
          defaultValue: 0,
        },
      },
    });
  };
  opCode({ TYPE }: Props) {
    // console.log(`Type: ${TYPE}`);
    return TYPE;
  }
}
