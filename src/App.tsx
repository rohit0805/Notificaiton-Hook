import React from "react";
import "./App.css";
import { Button, ButtonType } from "./components/Button";
import { useNotification, NotificationPositionType } from "./hooks";

let genId = 0;
function App() {
  const { NotificationComponent, triggerNotification } = useNotification({
    position: NotificationPositionType.TOP_LEFT,
  });
  const onButtonClick = (buttonType) => {
    triggerNotification({
      type: buttonType,
      message: `Testing id ${genId++}`,
    });
  };
  return (
    <React.Fragment>
      {NotificationComponent}
      <div className="container">
        <Button
          handleClick={() => {
            onButtonClick(ButtonType.INFO);
          }}
        >
          Info
        </Button>
        <Button
          handleClick={() => {
            onButtonClick(ButtonType.SUCCESS);
          }}
        >
          Success
        </Button>
        <Button
          handleClick={() => {
            onButtonClick(ButtonType.WARNING);
          }}
        >
          Warning
        </Button>
        <Button
          handleClick={() => {
            onButtonClick(ButtonType.ERROR);
          }}
        >
          ERROR
        </Button>
      </div>
    </React.Fragment>
  );
}

export default App;
