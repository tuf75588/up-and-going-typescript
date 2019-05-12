import * as React from "react";
import { number } from "prop-types";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}
class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentEnthusiasm: props.enthusiasmLevel || 1
    };
  }
  onIncrement = () => {
    this.setState((previousState) => ({
      currentEnthusiasm: previousState.currentEnthusiasm + 1
    }));
  };
  onDecrement = () => {
    this.setState((prevState) => ({
      currentEnthusiasm: prevState.currentEnthusiasm - 1
    }));
  };
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;
    if (enthusiasmLevel <= 0) {
      throw new Error("I think you could be a bit more enthusiastic!");
    }
    return (
      <div className='hello'>
        <div className='greeting'>
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
          <button onClick={this.onIncrement}>Increase Enthusiasm</button>
          <button onClick={this.onDecrement}>Decrease Enthusiasm</button>
        </div>
      </div>
    );
  }
}
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
export default Hello;
