"use strict";

function Homepage(props) {
  return (
    <React.Fragment>
      <h1>Hello User! Welcome to Ballonicorn's Trading Cards</h1>
      <a href="/cards">Click here to view the trading cards!</a>
      <img src="/static/img/balloonicorn.jpg" />
    </React.Fragment>
  );
}
// This is also in homepage.html ID
ReactDOM.render(<Homepage />, document.getElementById('app'));
