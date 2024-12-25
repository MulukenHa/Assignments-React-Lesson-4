import Card from './card';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.png';
import image3 from './assets/image3.jfif';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jfif';
import image6 from './assets/image6.jpg';

function CardList() {
    const cards = [
        {
            image: image1,
            title: "Card Title 1",
            description: "This is the description for card 1.",
        },
        {
            image: image2,
            title: "Card Title 2",
            description: "This is the description for card 2.",
        },
        {
            image: image3,
            title: "Card Title 3",
            description: "This is the description for card 3.",
        },
        {
          image: image4,
          title: "Card Title 4",
          description: "This is the description for card 4.",
      },
      {
        image: image5,
        title: "Card Title 5",
        description: "This is the description for card 5.",
    },
    {
      image: image6,
      title: "Card Title 6",
      description: "This is the description for card 6.",
  },
    ];

    return (
        <div className="card-list">
            {cards.map((card, index) => (
                <Card 
                    key={index} 
                    image={card.image} 
                    title={card.title} 
                    description={card.description} 
                />
            ))}
        </div>
    );
}

export default CardList;
