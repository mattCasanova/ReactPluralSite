import * as React from "react";

export interface HelloProps { 
    onClick: ()=> void;
    compiler: string; 
    framework: string; 
    count: number;
}

/*
export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;
*/
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    public render(): JSX.Element {
        return (
            <div onClick={this.props.onClick}>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <h2>Clicked {this.props.count} times</h2>
            </div>
        );
    }
}