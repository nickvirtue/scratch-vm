/* eslint-disable @typescript-eslint/no-unused-vars */

class CommandSendEmailBlock implements Block {
  constructor(private ignore: OcleaLowCodeAI) {}

  generate = (opFunction: string) => {
    return makeBlockData(opFunction, {
      text: `Send [${OBJECT}] as email to [${EMAIL_ADDRESS}]`,
      blockType: BlockType.COMMAND,
      arguments: {
        [OBJECT]: {
          type: ArgumentType.NUMBER,
          // defaultValue: "Data",
        },
        [EMAIL_ADDRESS]: {
          type: ArgumentType.STRING,
          defaultValue: "test@teknique.co.nz",
        },
      },
    });
  };
  opCode({ OBJECT, EMAIL_ADDRESS }: Props) {
    console.log(`Send ${OBJECT} as email to ${EMAIL_ADDRESS}`);
    return true;
  }
}
