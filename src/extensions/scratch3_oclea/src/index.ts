/// <reference path="./ScratchTypes.ts" />
/// <reference path="./MenuHelpers.ts" />
/// <reference path="./ArgumentTypes.ts" />
/// <reference path="./BlockHelpers.ts" />

/// <reference path="./Menus.ts" />

/// <reference path="./blocks/ReportTypeBlock.ts" />
/// <reference path="./blocks/CommandTestBlock.ts" />
/// <reference path="./blocks/CommandGoogleSheetsBlock.ts" />
/// <reference path="./blocks/CommandSendEmailBlock.ts" />
/// <reference path="./blocks/ReportObjectTypeBlock.ts" />
/// <reference path="./blocks/ReportObjectAgeBlock.ts" />
/// <reference path="./blocks/ReportObjectDetectedBlock.ts" />
/// <reference path="./blocks/WhenObjectDetectedBlock.ts" />

const iconURI = "/images/Oclea-Logo 400x400.png";

class OcleaLowCodeAI {
  private readonly CommandTestBlock: Block;
  private readonly ReportTypeBlock: Block;
  private readonly WhenObjectDetectedBlock: Block;
  private readonly ReportObjectDetectedBlock: Block;
  private readonly ReportObjectAgeBlock: Block;
  private readonly ReportObjectTypeBlock: Block;
  private readonly CommandSendEmailBlock: Block;
  private readonly CommandGoogleSheetsBlock: Block;

  constructor() {
    this.CommandTestBlock = new CommandTestBlock(this);
    this.ReportTypeBlock = new ReportTypeBlock(this);
    this.WhenObjectDetectedBlock = new WhenObjectDetectedBlock(this);
    this.ReportObjectDetectedBlock = new ReportObjectDetectedBlock(this);
    this.ReportObjectAgeBlock = new ReportObjectAgeBlock(this);
    this.ReportObjectTypeBlock = new ReportObjectTypeBlock(this);
    this.CommandSendEmailBlock = new CommandSendEmailBlock(this);
    this.CommandGoogleSheetsBlock = new CommandGoogleSheetsBlock(this);
  }

  static get EXTENSION_ID(): string {
    return "ocleaLowCode";
  }

  private _getBlocks = () => {
    const blocks = [
      this.WhenObjectDetectedBlock.generate("whenObjectDetected"),
      this.ReportTypeBlock.generate("getType"),
      this.ReportObjectDetectedBlock.generate("getDetectedObject"),
      this.ReportObjectAgeBlock.generate("getObjectAge"),
      this.ReportObjectTypeBlock.generate("getObjectType"),
      this.CommandSendEmailBlock.generate("sendEmail"),
      this.CommandGoogleSheetsBlock.generate("addToGoogleSheet"),
      // this.CommandTestBlock.generate("commandTestBlockOp"),
    ];
    console.log("blocks ============================");
    console.log(blocks);
    console.log("end ========= ===================");
    return blocks;
  };

  getInfo() {
    return {
      id: OcleaLowCodeAI.EXTENSION_ID,
      name: "Oclea Low Code",
      blockIconURI: iconURI,

      blocks: this._getBlocks(),
      menus: {
        ...mapMenu(TypeMenu),
        ...mapMenu(ageMenu),
      },
    };
  }

  getType(props) {
    return this.ReportTypeBlock.opCode(props);
  }
  whenObjectDetected(props) {
    return this.WhenObjectDetectedBlock.opCode(props);
  }
  getDetectedObject(props) {
    return this.ReportObjectDetectedBlock.opCode(props);
  }

  getObjectAge(props) {
    return this.ReportObjectAgeBlock.opCode(props);
  }

  getObjectType(props) {
    return this.ReportObjectTypeBlock.opCode(props);
  }
  sendEmail(props) {
    return this.CommandSendEmailBlock.opCode(props);
  }
  addToGoogleSheet(props) {
    return this.CommandGoogleSheetsBlock.opCode(props);
  }
  commandTestBlockOp(props) {
    return this.CommandTestBlock.opCode(props);
  }
}

// @ts-ignore
// Scratch.extensions.register(new OcleaLowCodeAI());
module.exports = OcleaLowCodeAI;
// const x = {};
