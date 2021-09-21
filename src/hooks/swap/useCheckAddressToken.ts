import React, { useState } from "react";
import { Token } from "../../types/types";

function useCheckAddressToken(): [
  (contract: any, address: string) => void,
  Token | undefined,
  boolean
] {
  const [res, setRes] = useState<Token>();
  const [loading, setLoading] = useState<boolean>(false);

  const onCheck = async (contract: any, address: string) => {
    try {
      setLoading(true);
      const name = await contract.methods.name().call();
      const symbol = await contract.methods.symbol().call();
      setRes({
        name,
        symbol,
        address,
      });
    } catch (error) {
      setRes(undefined);
    }
    setLoading(false);
  };

  return [onCheck, res, loading];
}

export default useCheckAddressToken;
