import React from "react";
import { ThemeContext, themes } from "./context/theme-context";
import ThemeTogglerButton from "./context/theme-toggler-button";
import Ledger from './Ledger'
import Manager from './Manager'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };

    this.dataTransfer = (data) => {
      this.setState({contextData: data});
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      contextData: [],
      toggleTheme: this.toggleTheme,
      dataTransfer: this.dataTransfer
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
      <hr/>
      <Ledger/>
      <hr/>
      <Manager/>
    </div>
  );
}

export default App
