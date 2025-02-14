import NoSSR from "react-no-ssr";
import { useState } from "react";
import { Layout, Wallet } from "@/components";
import { CHAIN_NAME } from "@/config";

export default function Home() {
  const [chainName, setChainName] = useState(CHAIN_NAME);

  function onChainChange(chainName?: string) {
    setChainName(chainName!);
    console.log("current chain", chainName);
  }

  return (
    <Layout>
      <NoSSR>
        <Wallet chainName={chainName} onChainChange={onChainChange} />
      </NoSSR>
    </Layout>
  );
}
