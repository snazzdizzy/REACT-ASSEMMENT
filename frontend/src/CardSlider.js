import "./App.css";
import rectangle4 from "./assets/img/rectangle4.svg";
import CardSquare from "./components/CardSquare";
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const CardSlider = () => {


  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('/api')
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })



  const propsData = {
    cardSquare1: {
      loremIpsumDolorSitAmetConse:
        "The only athlete in the world to do her Olympic routine in 2020.              ",
      cardTitle: "The Olympian",
    },
    cardSquare: {
      loremIpsumDolorSitAmetConse:
        "The only athlete in the world to do her Olympic routine in 2020.              ",
      cardTitle: "The Olympian",
    },
    cardSquare2: {
      loremIpsumDolorSitAmetConse:
        "Grow your savings treasure and grow your dragon.",
      cardTitle: "The Savings Jar",
    },
    cardSquare3: {
      loremIpsumDolorSitAmetConse:
        "Helping South Africans become #CashCleva with Skhokho and TymeBank.",
      cardTitle: "Skhokho seMali",
    },
  };
  return (
    <div className="case-studies">
      <div className="flex-container">
        <div className="flex-container-1">
          <img className="rectangle-4" src={rectangle4} />
          <span className="case-studies-1">Case studies </span>
        </div>
        <div className="flex-container-2">
         
          <CardSquare
            className="card-square-instance-1"
            {...propsData.cardSquare}
          />
        </div>
      </div>
      <CardSquare
        className="card-square-2-instance"
        {...propsData.cardSquare2}
      />
      <CardSquare
        className="card-square-3-instance"
        {...propsData.cardSquare3}
      />
    </div>
  );
};
export default CardSlider;
