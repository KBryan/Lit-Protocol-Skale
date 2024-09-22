import * as LitJsSdkNodeJs from '@lit-protocol/lit-node-client-nodejs';
import { checkAndSignAuthMessage } from '@lit-protocol/auth-browser';
import siwe from "siwe";
import dotenv from 'dotenv/config';
import { ethers } from 'ethers';
import { LIT_RPC } from "@lit-protocol/constants";

const client = new LitJsSdkNodeJs.LitNodeClientNodeJs({
    litNetwork: 'datil-test',
    defaultAuthCallback: checkAndSignAuthMessage,
});

const scheme = "https";
const domain = "localhost";
const origin = "https://localhost/login";

function createSiweMessage(address, statement) {
    const siweMessage = new siwe.SiweMessage({
        scheme,
        domain,
        address,
        statement,
        uri: origin,
        version: '1',
        chainId: '37084624'
    });
    return siweMessage.prepareMessage();
}

console.log("Returned from SIWE" + createSiweMessage(
    "0xAfb567645045eaAFEde2E5587EE053b2a4eFFb52",
    "This is a test statement."
));

const dataHex = ethers.utils.hexlify(
    ethers.utils.toUtf8Bytes('The answer to the Universe is 42.')
);

console.log("Data Hex: " + dataHex);

const ethersSigner = new ethers.Wallet(
    process.env.ETHEREUM_PRIVATE_KEY,
    new ethers.providers.JsonRpcProvider(LIT_RPC.CHRONICLE_YELLOWSTONE)
);

console.log("Eth Signer: " + ethersSigner.address);

await client.connect();

const authSig = await checkAndSignAuthMessage({
    chain: '', // Specify the chain name here, such as 'skaleTestnet' or 'skale' for mainnet
});
