"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
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
const arm_playwrighttesting_1 = require("@azure/arm-playwrighttesting");
const identity_1 = require("@azure/identity");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
/**
 * This sample demonstrates how to delete a Account
 *
 * @summary delete a Account
 * x-ms-original-file: 2024-12-01/Accounts_Delete.json
 */
async function accountsDelete() {
    const credential = new identity_1.DefaultAzureCredential();
    const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID;
    const client = new arm_playwrighttesting_1.AzurePlaywrightServiceClient(credential, subscriptionId);
    const result = await client.accounts.delete("armtestapi-rg", "saradatestAccount");
    console.log(result);
}
async function main() {
    accountsDelete();
}
main().catch(console.error);