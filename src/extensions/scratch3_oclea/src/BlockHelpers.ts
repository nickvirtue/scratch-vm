/* eslint-disable @typescript-eslint/no-unused-vars */

interface Block {
  generate: (opFunction: string) => Record<string, any>;
  opCode: (props: Props) => any | void;
}

const makeBlockData = (opFunction: string, data: Record<string, any>) => ({
  opcode: opFunction,

  ...data,
});
