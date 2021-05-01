import blockChainRoute from "../routes/blockchain/blockchain.route";

export default function (app) {
  app.use("/blockchain", blockChainRoute);
}
