// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzurePlaywrightServiceClient } from "@azure/arm-playwrighttesting";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";
dotenv.config();

/**
 * This sample demonstrates how to create a Account
 *
 * @summary create a Account
 * x-ms-original-file: 2024-12-01/Accounts_CreateOrUpdate.json
 */

async function accountsGet() {
    const credential = new DefaultAzureCredential();
    const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID!;
    const client = new AzurePlaywrightServiceClient(credential, subscriptionId);
    const result = await client.accounts.get("armtestapi-rg", "saradatestAccount");
    console.log(result);
}

async function main() {
    accountsGet();
}

main().catch(console.error);