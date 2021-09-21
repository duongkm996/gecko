import { useState } from "react";
import { fromWei, toWei } from "../../app/utils/wei";

function useGetAmountOut(): [
  (contract: any, amountIn: number, pair: string[]) => void,
  number[] | undefined,
  boolean
] {
  const [res, setRes] = useState<number[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const onGet = async (
    routerContract: any,
    amountIn: number,
    pair: string[]
  ) => {
    try {
      setLoading(true);
      if (amountIn) {
        const amoutOutsResult: string[] = await routerContract.methods
          .getAmountsOut(toWei(amountIn.toString()), pair)
          .call();
        setRes([
          parseFloat(fromWei(amoutOutsResult[0])),
          parseFloat(fromWei(amoutOutsResult[1])),
        ]);
      } else {
        setRes(undefined);
      }
    } catch (error) {
      setRes(undefined);
    }
    setLoading(false);
  };

  return [onGet, res, loading];
}

export default useGetAmountOut;
