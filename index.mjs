import * as LitJsSdkNodeJs from '@lit-protocol/lit-node-client-nodejs';
import { checkAndSignAuthMessage } from '@lit-protocol/auth-browser';
import siwe from "siwe";

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

await client.connect();

const authSig = await checkAndSignAuthMessage({
    chain: '', // add skaleTestnet or skale for mainnet
});