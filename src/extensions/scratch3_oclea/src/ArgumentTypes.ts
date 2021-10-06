/* eslint-disable @typescript-eslint/no-unused-vars */

const CONDITION = "CONDITION";
const OBJECT = "OBJECT";
const DATA = "DATA";
const SHEET_NAME = "SHEET_NAME";
const DETECTED = "DETECTED";
const EMAIL_ADDRESS = "EMAIL_ADDRESS";
const TYPE = "TYPE";
const AGE = "AGE";
type Props = {
  [CONDITION]?: boolean;
  [OBJECT]?: number;
  [DATA]?: string;
  [SHEET_NAME]?: string;
  [DETECTED]?: string;
  [EMAIL_ADDRESS]?: string;
  [TYPE]?: number;
  [AGE]?: number;
};
