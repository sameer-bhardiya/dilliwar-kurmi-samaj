import styled from "styled-components";
import { Email, Facebook, Instagram, Phone, WhatsApp } from "@mui/icons-material";

const Container = styled.div`
    height:100px;
    width:100%;
    background-color:#cf4d23;
    color:white;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:bold;
    z-index: 1001;
    position: fixed;
    top:0;
    z-index: 1000;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Wrapper = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 488px) {
    padding: 10px 0px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;

  a {
    color: black;
    text-decoration: none;
    margin-right: 15px;
    display: flex;
    align-items: center;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
      color: #555;
    }
  }

  svg {
    margin-right: 5px;
    color: black;
    transition: color 0.3s ease;

    &:hover {
      color: #555;
    }
  }
`;

const Title = styled.span`
  margin-left: 15px;
  color: black;
  font-weight: bold;
  font-size: 18px;
`;

const Logo = styled.div`
  img {
    height: 70px;
    border-radius: 5px;

    @media (max-width: 488px) {
      height: 30px;
    }
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 488px) {
    flex: 2;
    justify-content: center;
    margin-right: 10px;
  }
`;

const Announcement = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Contact>
            <a href="mailto:info@kurmisamaaj.com">
              <Email /> info@kurmisamaaj.com
            </a>
            <a href="tel:+911234567890">
              <Phone /> +91 12345 67890
            </a>
          </Contact>
        </Left>
        <Center>
          <Logo>
            <img src="/image/kurmi.png" alt="kurmi samaaj Logo" />
          </Logo>
          <Title>दिल्लीवार कुर्मी क्षत्रिय समाज</Title>
        </Center>
        <Right>
          <SocialContainer>
            <a href="https://www.facebook.com/DigitaloilpaintingGift" target="_blank" rel="noopener noreferrer">
              <SocialIcon color="3B5999">
                <Facebook />
              </SocialIcon>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon color="E4405F">
                <Instagram />
              </SocialIcon>
            </a>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <SocialIcon color="55ACEE">
                <WhatsApp />
              </SocialIcon>
            </a>
          </SocialContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Announcement;
