import React from "react";

function HOC(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange =  this.handleChange.bind(this);
      this.state = {
        data: selectData(GlobalDataSource, props),
      };
    }

    componentDidMount() {
      GlobalDataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      GlobalDataSource.removeChangeListener(ths.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(GlobalDataSource, this.props),
      });
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    };
  }   
}

export default HOC;