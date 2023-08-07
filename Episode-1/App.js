const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am child"),
    React.createElement("h1", {}, "i am child"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am child"),
    React.createElement("h1", {}, "i am child"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(parent);
