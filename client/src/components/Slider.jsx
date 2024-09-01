import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { sliderItems } from "../data";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-top: 180px;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.directions === "left" && "10px"};
    right: ${props => props.directions === "right" && "10px"};
    cursor: pointer;
    margin: auto;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease; /* Slower transition */
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;  /* Centering content horizontally */
    background-color: #${props => props.bg};
    position: relative;
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;  /* Centering the image vertically */
`;

const Image = styled.img`
    height: 70%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  /* Centering the text content */
    text-align: center;  /* Centering the text */
`;

const Title = styled.h1`
    font-size: 50px;
    color: #000;
`;

const Desc = styled.p`
    margin: 30px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    background-color: #FFA500;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #e69500;
    }
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const slideInterval = 8000; // Slow down automatic slide change to 8 seconds

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
        } else {
            setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(prev => (prev < sliderItems.length - 1 ? prev + 1 : 0));
        }, slideInterval); // Update interval to slower time (8 seconds)

        return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            <Arrow directions="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {/* {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} alt={item.title} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Link to="/events">
                                <Button>LEARN MORE</Button>
                            </Link>
                        </InfoContainer>
                    </Slide>
                ))} */}
            </Wrapper>
            <Arrow directions="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;
