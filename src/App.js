import {useState} from "react";

import HeaderComponent from "./components/header/header.component";
import MainComponent from "./components/main/main.component";
import FooterComponent from "./components/footer/footer.component";

import './App.css';



function App() {
    const bd_items = [
        {
            "id": 1,
            "title": "Стул серый",
            "img": "chair-grey.jpeg",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, ullam?",
            "category": "chairs",
            "price": "49.99"
        },
        {
            "id": 2,
            "title": "Стол",
            "img": "table.webp",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, ullam?",
            "category": "tables",
            "price": "149.00"
        },
        {
            "id": 3,
            "title": "Диван",
            "img": "sofa.jpeg",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, ullam?",
            "category": "sofas",
            "price": "249.00"
        },
        {
            "id": 4,
            "title": "Стул белый",
            "img": "chair-white.jpeg",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, ullam?",
            "category": "chairs",
            "price": "49.99"
        },
        {
            "id": 5,
            "title": "Лампа",
            "img": "wall-light.jpeg",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, ullam?",
            "category": "lights",
            "price": "29.99"
        }
    ]

    const {items, setItems} = useState(bd_items);



    return (
        <div className="wrapper">
            <HeaderComponent/>
            <MainComponent items={bd_items} />
            <FooterComponent/>
        </div>
    );
}

export default App;
