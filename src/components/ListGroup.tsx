import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

//import { MouseEvent } from "react";
function ListGroup({ items, heading, onSelectItem }: Props) {
  //   let selectedIndex = 0;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handler
  //const handleClick = (event: MouseEvent) => console.log(event)
  //   items = [];

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   }

  return (
    <>
      <h1>{heading}</h1>
      {/* /* { items.length === 0 ? <p>No item found</p> : null } */ }
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;