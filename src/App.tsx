import { Button } from "@fluentui/react-components"
import './App.css'
import { Explorer } from "./feature/explorer/Explorer";

import {
  bundleIcon,
  ArrowLeft20Filled,
  ArrowLeft20Regular,
} from "@fluentui/react-icons";

const CalendarMonth = bundleIcon(ArrowLeft20Filled, ArrowLeft20Regular);

function App() {
  return (
    <div className="main-container w-full h-full z-10 absolute flex p-10">
      <Explorer></Explorer>
      <div>
        <Button appearance="subtle" icon={<CalendarMonth />}></Button>
      </div>
    </div>
  )
}

export default App
