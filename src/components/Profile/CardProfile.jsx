import React from 'react'
import './profile.scss';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';



const Card = (props) => (
    <div className="card">
        <img src={props.imgUrl}
            alt={props.alt || 'Image'} />
        <div className="card-content">
            <h4>{props.title}</h4>
            <span><AiFillLinkedin/> <img className='country-image' src={props.flag}></img> <AiOutlineMail/></span>
            <p>{props.content}</p>

            
        </div>
    </div>
);

const CardContainer = (props) => (
    <div className="cards-container">
        {
            props.cards.map((card) => (
                <Card title={card.title}
                    content={card.content}
                    imgUrl={card.imgUrl} 
                    flag={card.flag}/>
            ))
        }
    </div>
);


const CardProfile = () => {

    const cardsData = [
        { id: 1, title: 'Anjo AgBay', content: 'Digital Marketing', imgUrl: 'https://girlpowertalk.com/wp-content/uploads/2022/03/Anjo.png', flag:'https://countryflagsapi.com/png/ca' },
        { id: 2, title: 'Kristel Anahaw', content: 'Social Media Manager', imgUrl: 'https://girlpowertalk.com/wp-content/uploads/2022/11/Frame-20.png', flag:'https://countryflagsapi.com/png/in' },
        { id: 3, title: 'Diner Apriliani', content: 'Project Lead', imgUrl: 'https://girlpowertalk.com/wp-content/uploads/2022/03/Dee-1.png', flag:'https://countryflagsapi.com/png/ca' },
        { id: 4, title: 'Ethan Marco', content: 'Digital Marketing', imgUrl: 'https://girlpowertalk.com/wp-content/uploads/2022/08/Ethan.png', flag: 'https://countryflagsapi.com/png/ca' },
        { id: 5, title: 'Shaheena', content: 'Associate Marketing & PR', imgUrl: 'https://girlpowertalk.com/wp-content/uploads/2022/09/Shaheena.png', flag:'https://countryflagsapi.com/png/in' },
        { id: 6, title: 'CARD 6', content: 'Wade Wilson', imgUrl: 'https://unsplash.it/200/199', flag: 'https://countryflagsapi.com/png/ca' },
        { id: 7, title: 'CARD 7', content: 'Peter Quill', imgUrl: 'https://unsplash.it/199/199', flag: 'https://countryflagsapi.com/png/lr' },
        { id: 8, title: 'CARD 8', content: 'Steven Rogers', imgUrl: 'https://unsplash.it/199/200', flag: 'https://countryflagsapi.com/png/in' },
        { id: 9, title: 'CARD 9', content: 'Bruce Banner', imgUrl: 'https://unsplash.it/200/198', flag: 'https://countryflagsapi.com/png/ca' },
        { id: 10, title: 'CARD 10', content: 'Vincent Strange', imgUrl: 'https://unsplash.it/198/199', flag:'https://countryflagsapi.com/png/lr' },
      ]
  return (
    <div className="main-container">
        <div className="container">
            <h1 style={{ 'text-align': 'center' }}>
                Meet Our Young Leaders
            </h1>

            <CardContainer cards={cardsData} />
        </div>
      </div>
    )
  
}

export default CardProfile