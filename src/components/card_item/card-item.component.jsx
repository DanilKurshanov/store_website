import './card-item.styled.css';


const CardItemComponent = ({item}) => {

    return (
        <div className={'card-item'}>
            <img src={`./React Shop Photos/${item.img}`} alt="image of product"/>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}$</b>
        </div>
  );
}

export default CardItemComponent;