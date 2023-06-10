import { Button } from "@fluentui/react-components"
import './App.css'

import { useAppDispatch } from "./app/hooks"
import { switchCurrentThemeColor } from "./feature/themeProvider/themeSlice"

function App() {
  const dispatch = useAppDispatch();

  return (
    <div className="a z-10">
      <Button className="" onClick={() => dispatch(switchCurrentThemeColor())}>Button</Button>
    </div>
  )
}

export default App
