function List({}) {
  var nameList = [
    { id: "01", firstname: "Rahul", lastname: "Gulati" },
    { id: "02", firstname: "Ronak", lastname: "Gupta" },
    { id: "03", firstname: "Vaishali", lastname: "Kohli" },
    { id: "04", firstname: "Peter", lastname: "Sharma" }
  ];
  const itemList = nameList.map((item) => (
    <li>
      {item.firstname} {item.lastname}
    </li>
  ));
  return (
    <div>
      <ol style={{ listStyleType: "none" }}>{itemList}</ol>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <List />
    </div>
  );
}