import "./App.css";
import Card from "./Card";

function App() {
  const data = [
    { type: "bank-draft", title: "Bank Draft", position: 0 },
    { type: "bill-of-lading", title: "Bill of Lading", position: 1 },
    { type: "invoice", title: "Invoice", position: 2 },
    { type: "bank-draft-2", title: "Bank Draft 2", position: 3 },
    { type: "bill-of-lading-2", title: "Bill of Lading 2", position: 4 },
  ];

  return (
    <div className="App">
      <div className="CardGroup">
        {data.map((obj) => {
          return (
            <Card
              title={obj.title}
              image={`./images/cat${obj.position}.jpeg`}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
