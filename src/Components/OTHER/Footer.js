import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props); // to be able to use this.props
  }
  render() {
    return (
      <div>
        <footer>
          <p>hey from the footer</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
