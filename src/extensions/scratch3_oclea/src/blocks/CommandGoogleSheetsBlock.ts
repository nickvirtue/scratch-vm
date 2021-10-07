/* eslint-disable @typescript-eslint/no-unused-vars */

class CommandGoogleSheetsBlock implements Block {
  constructor(private ignore: OcleaLowCodeAI) {}

  generate = (opFunction: string) => {
    return makeBlockData(opFunction, {
      text: `Add [${OBJECT}] as new row in [${SHEET_NAME}]`,
      blockType: BlockType.COMMAND,
      arguments: {
          [OBJECT]: {
              type: ArgumentType.NUMBER,
              // defaultValue: "data",
          },
        [SHEET_NAME]: {
          type: ArgumentType.STRING,
          defaultValue: "Some sheet name",
        },
      },
    });
  };
  opCode({ OBJECT, SHEET_NAME }: Props) {
    console.log(`Add ${getTypeByIndex(OBJECT)} to new row in ${SHEET_NAME}`);
  }
}
