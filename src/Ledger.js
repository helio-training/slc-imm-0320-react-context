import React, { Component } from 'react'
import { ThemeContext } from "./context/theme-context";

export default class extends Component {
    state = {}

    handleBtnClick = (contextFunc) => {
        let total = '$5000'
        contextFunc(total)
    }
    render() {
        return (
          <ThemeContext.Consumer>
            {({ dataTransfer }) => (
                <button onClick={() => this.handleBtnClick(dataTransfer)}> 
                    CLICK ME 
                </button>
            )}
          </ThemeContext.Consumer>
        );
    }
}
