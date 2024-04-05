import {Test} from "./pages/test/Test.tsx";
import {useMemo} from "react";
import {TestViewModel} from "./pages/test/test.vm.ts";

function App() {
  const test = useMemo(()=>new TestViewModel(),[])

  return (
    <>
    <Test vm={test}/>
    </>
  )
}

export default App
