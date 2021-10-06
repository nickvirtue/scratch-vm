/* eslint-disable @typescript-eslint/no-unused-vars */

class WhenObjectDetectedBlock implements Block {
  constructor(private ignore: OcleaLowCodeAI) {}

  generate = (opFunction: string) => {
    return makeBlockData(opFunction, {
      text: `When [${CONDITION}]`,
      blockType: BlockType.HAT,
      arguments: {
        [CONDITION]: {
          type: ArgumentType.BOOLEAN,
          defaultValue: false,
        },
      },
    });
  };
  opCode({ CONDITION }: Props) {
    // console.log(`When ${CONDITION}`);
    return !!CONDITION;
  }
}
