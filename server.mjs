import * as LitJsSdk from "@lit-protocol/lit-node-client-nodejs";
import { LitNetwork } from "@lit-protocol/constants";
import express from "express";
const app = express()

app.locals.litNodeClient = new LitJsSdk.LitNodeClientNodeJs({
    alertWhenUnauthorized: false,
    litNetwork: "datil-test",
});
await app.locals.litNodeClient.connect();