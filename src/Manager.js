import React, { Component } from 'react'
import { ThemeContext } from "./context/theme-context";

export default class extends Component {
    state = {}
    render() {
        return (
          <ThemeContext.Consumer>
            {({ contextData, theme }) => (
              <div
                style={{ backgroundColor: theme.background, color: theme.foreground }}>
                <div>{contextData}</div>
                <p>{console.log(contextData)}</p>
              </div>
            )}
          </ThemeContext.Consumer>
        );
    }
}