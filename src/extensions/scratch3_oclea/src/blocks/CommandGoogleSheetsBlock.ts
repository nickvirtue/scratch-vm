/* eslint-disable @typescript-eslint/no-unused-vars */

class CommandGoogleSheetsBlock implements Block {
  constructor(private ignore: OcleaLowCodeAI) {}

  generate = (opFunction: string) => {
    return makeBlockData(opFunction, {
      text: `Add [${DATA}] as row to [${SHEET_NAME}]`,
      blockType: BlockType.COMMAND,
      arguments: {
        [SHEET_NAME]: {
          type: ArgumentType.STRING,
          defaultValue: "Some sheet name",
        },
        [DATA]: {
          type: ArgumentType.STRING,
          defaultValue: "Data",
        },
      },
    });
  };
  opCode({ DATA, EMAIL_ADDRESS }: Props) {
    console.log(`Send ${DATA} as email to ${EMAIL_ADDRESS}`);
  }
}
