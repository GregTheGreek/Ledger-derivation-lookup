import {ethers} from "ethers";
import { LedgerSigner } from "@ethers-ext/signer-ledger";
import HIDTransport from "@ledgerhq/hw-transport-node-hid";

const RPC = process.argv[2];
const paths = [
  {name: "Default", path: `m/44'/60'/i'/0/0`},
  {name: "Ledger", path: `m/44'/60'/0'/i`},
  {name: "Ledger Live", path: `m/44'/60'/0'/i/0/0`},
];

const getPaths = async (path, depth) => {

}

(async() => {
  const provider = new ethers.JsonRpcProvider(RPC)
  const signer = new LedgerSigner(HIDTransport, provider);

  for (let j = 0; j < paths.length; j++) {
    console.log(`${paths[j].name}: ${paths[j].path}`);
    console.log("---------------------");
    for (let i = 0; i < 10; i++) {
      const path = paths[j].path.replace("i", i);
      const account = signer.getSigner(path);
      const address = await account.getAddress();
      const balance = ethers.formatEther(await provider.getBalance(address));
      console.log(`${i}: ${address} (${balance} ether)`);
    }
    console.log("\n")
  }
})();
