import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  margin:10px 100px;
  padding: 60px 0;
  background: linear-gradient(135deg, #fff, #f9f9f9);
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Column = styled.div`
  flex: ${(props) => (props.size ? props.size : "1")};
  padding: 15px;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 42px;
    font-weight: bold;
    color: #333;
    position: relative;
    display: inline-block;
    padding-bottom: 10px;

    &::after {
      content: '';
      width: 60px;
      height: 3px;
      background-color: #FFA500;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    span {
      color: #FFA500;
    }
  }
`;

const ImageBox = styled.div`
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Content = styled.div`
  text-align: left;
  padding-left: 20px;

  p {
    font-size: 18px;
    color: #666;
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const StyledButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 30px;
  background-color: #FFA500;
  color: white;
  text-decoration: none;
  font-size: 16px;
  border-radius: 25px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #e69500;
    transform: translateY(-2px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const AboutSection = () => {
  return (
    <Container className="about sec-padd">
      <Row>
        <Column size="12">
          <SectionTitle className="section-title center">
            <h2>
              दिल्लीवार कुर्मी क्षत्रिय समाज <span className="thm-color">में आपका स्वागत है</span>
            </h2>
          </SectionTitle>
        </Column>
      </Row>

      <Row>
        <Column size="5">
          <ImageBox className="img-box">
            <img
              src="./image/abt.jpg"
              alt="Chhattisgarh Kurmi Samaj"
              title="Chhattisgarh Kurmi Samaj"
            />
          </ImageBox>
        </Column>

        <Column size="7">
          <Content>
            <p>
              <strong>दिल्लीवार कुर्मी क्षत्रिय समाज [संक्षिप्त परिचय]</strong>
            </p>
            <p>
              दिल्लीवार कुर्मी क्षत्रिय समाज का गठन वर्ष 2006 में किया गया। छ.ग. राज्य के प्रथम स्वप्नदृष्टा परम श्रद्धेय डाॅ. खूबचंद बघेल जी समस्त फिरकों को एक सूत्र में बाॅधकर कुर्मी समाज के उत्तरोत्तर आर्थिक, राजनैतिक, सामाजिक, शैक्षणिक, सांस्कृतिक विकास के पक्षधर थे। उनके इस दूरदर्शी स्वप्न को साकार करके प्रदेश संगठन द्वारा 22 फरवरी 2008 को सप्रे शाला मैदान में एक विराट रैली एवं सम्मेलन का आयोजन किया गया।
            </p>

            <StyledButton to="/about-us">और पढ़ें</StyledButton>
          </Content>
        </Column>
      </Row>
    </Container>
  );
};

export default AboutSection;
