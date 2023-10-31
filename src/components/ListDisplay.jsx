import ListItem from "./ListItem"

const ListDisplay = (props) => {
    
    const {items} = props;

    const mappedItems = items.map((item, i) => (
      <ListItem
        key={i}
        name={item}
      />
    ))
    return (
      <ul>
        {mappedItems}
      </ul>
    )
  }

  export default ListDisplay