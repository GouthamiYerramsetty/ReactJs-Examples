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
    React.createElement("h3", {}, "This is reactjs code"),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
