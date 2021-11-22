import DappDescription from "./components/DappDescription";
import TaskCreator from "./components/TaskCreator";
import TaskList from "./components/TaskList";
import { faCubes, faWallet } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeEth } from "./redux/dappAppSlice";

library.add(faCubes, faWallet);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeEth());
  }, [dispatch]);

  return (
    <div className="container w-3/5 mx-auto h-auto flex-col md:flex-row flex justify-center items-center align-middle mt-20">
      <div className="flex flex-col w-1/3 min-w-min h-96 bg-blue-900">
        <DappDescription />
        <TaskCreator />
      </div>
      <div className="flex flex-col w-2/3 min-w-min h-96 bg-blue-900">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
