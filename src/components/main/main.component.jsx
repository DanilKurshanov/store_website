import CardItemComponent from "../card_item/card-item.component";

import './main.styled.css';


const MainComponent = ({items}) => {
  return (
      <main>
          {items.map(item => (
              <CardItemComponent item={item} key={item.id}/>
          ))}
      </main>
  );
}

export default MainComponent;