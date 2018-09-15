import * as React from 'react'

import './Hello.css'

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
    private onIncrement = (): void => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    private onDecrement = (): void => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
    
    constructor(props: Props) {
      super(props);
      this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
    }

    public render(): JSX.Element {
        const { name } = this.props;

        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + this.getExclamationMarks(this.state.currentEnthusiasm)}
                </div>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        );
    }

    private updateEnthusiasm(currentEnthusiasm: number): void {
        this.setState({currentEnthusiasm});
    }

    private getExclamationMarks(numChars: number): string {
        return Array(numChars + 1).join('!');
    }
}

export default Hello;