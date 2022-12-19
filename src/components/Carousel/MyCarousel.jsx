import Carousel from "react-bootstrap/Carousel";
import "../../App.css";

{
  /* TODO- Have to ADD images from assets  */
}

function MyCarousel() {
  return (
    <Carousel style={{ width: "80vw", height: "80vh", marginInline: "auto" }}>
      <Carousel.Item>
        <img
          style={{ width: "80vw", height: "80vh", objectFit: "contain" }}
          className="d-block w-100"
          src="https://girlpowertalk.com/wp-content/uploads/2022/07/deena-with-book.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: "red" }}>WeAreGirlPowerTalk</h3>
          <p style={{ fontSize: "26px" }}>
            A woman with a voice is, by definition, a strong woman.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "80vw", height: "80vh", objectFit: "contain" }}
          className="d-block w-100"
          src="https://girlpowertalk.com/wp-content/uploads/2022/06/Sheroes.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>WeAreGirlPowerTalk</h3>
          <p style={{ fontSize: "26px" }}>
            Women are always saying, 'We can do anything that men can do.' But
            men should be saying, 'We can do anything that women can do.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "80vw", height: "80vh", objectFit: "contain" }}
          className="d-block w-100"
          src="https://girlpowertalk.com/wp-content/uploads/2022/01/f1-corousel.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>WeAreGirlPowerTalk </h3>
          <p style={{ fontSize: "26px" }}>
            “Women belong in all places where decisions are made … It shouldn’t
            be that women are the exception.”
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
