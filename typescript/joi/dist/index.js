"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __importStar(require("@hapi/joi"));
require("joi-extract-type");
const shinigamiSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .required(),
    zanpakuto: Joi.string().required(),
    bankai: Joi.string().required()
});
function saveShinigami(shinigami) {
    const { error, value } = shinigamiSchema.validate(shinigami);
    if (error)
        throw new Error(`Validate Error: ${error}`);
    const { name, zanpakuto, bankai } = value;
    return { name, zanpakuto, bankai };
}
// name: 'Ichigo Kurosaki',
const response = saveShinigami({
    name: 'I',
    zanpakuto: 'Zangetsu',
    bankai: 'Tensa Zangetsu'
});
// Throw error!
console.log({ saveShinigami: response });
//# sourceMappingURL=index.js.map