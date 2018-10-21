import * as React from "react";

export interface IHelloProps {
  compiler: string;
  framework: string;
}

// 'IHelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<IHelloProps, {}> {
  public render(): JSX.Element {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}!
      </h1>
    );
  }
}
