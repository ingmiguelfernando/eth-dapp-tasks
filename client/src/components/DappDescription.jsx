import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const DappDescription = () => {
  const wallet = useSelector((state) => state.dappApp.account);

  return (
    <div className="m-4 bg-gray-800 rounded-md overflow-x-auto">
      <div className="flex mt-2 ml-2">
        <FontAwesomeIcon icon="cubes" color="white" size="lg" />
        <div className="text-primary pl-2 text-lg font-light">DappTask</div>
      </div>
      <span className="text-secondary text-sm m-2">Decentralized Task App</span>
      <div className="flex mt-2 ml-2">
        <FontAwesomeIcon icon="wallet" color="white" size="lg" />
        <div className="text-primary pl-2 text-sm font-extralight">Wallet</div>
      </div>
      <span className="text-secondary text-xs mx-2">{wallet}</span>
    </div>
  );
};

export default DappDescription;
