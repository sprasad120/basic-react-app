import Button from "./components/Button";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log('your selected item is: ' + item);
  // }
  return (
    <div>
      <Button>
        My Button
      </Button>
    </div>
  )
  // return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
}

export default App;