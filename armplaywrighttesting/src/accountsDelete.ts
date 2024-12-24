// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzurePlaywrightServiceClient } from "@azure/arm-playwrighttesting";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";
dotenv.config();
/**
 * This sample demonstrates how to delete a Account
 *
 * @summary delete a Account
 * x-ms-original-file: 2024-12-01/Accounts_Delete.json
 */
async function accountsDelete() {
    const credential = new DefaultAzureCredential();
    const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID!;
    const client = new AzurePlaywrightServiceClient(credential, subscriptionId);
    const result = await client.accounts.delete("armtestapi-rg", "saradatestAccount");
    console.log(result);
}

async function main() {
    accountsDelete();
}

main().catch(console.error);