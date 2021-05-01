import elliptic from "elliptic";
export const ec = elliptic.ec;
export const EC = new ec("secp256k1");

export const key = EC.genKeyPair();
export const publicKey = key.getPublic("hex");
export const privateKey = key.getPrivate("hex");

function KeyGenerate() {
  console.log({ publicKey });

  console.log({ privateKey });
}

export default KeyGenerate;
