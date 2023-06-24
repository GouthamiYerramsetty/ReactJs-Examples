{
  /* <div>
    <div>
        <h1>This is react</h1>
        <h2>This is reactjs</h2>
    </div>
</div> */
}
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }),
  [
    React.createElement("h1", {}, "This is react"),
    React.createElement("h2", {}, "This is reactjs"),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);
