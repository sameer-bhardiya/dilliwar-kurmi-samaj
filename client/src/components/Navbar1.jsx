import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, Search } from '@mui/icons-material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Containers = styled.div`
  height: 80px;
  position: fixed;
  top: 90px;
  width: 100%;
  margin-bottom: 5px;
  background-color: white;
  z-index: 1000;
  ${mobile({
    height: "50px"
  })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 488px) {
    padding: 10px 0;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px 13px;
  border-radius: 50px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({
    width: "50px;"
  })};
`;

const Logo = styled.div`
  img {
    height: 60px;
    border-radius: 5px;
    @media (max-width: 488px) {
      height: 30px;
    }
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 488px) {
    flex: 2;
    justify-content: center;
    margin-right: 10px;
  }
`;

const MenuItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  @media (max-width: 488px) {
    font-size: 15px;
    margin-left: 10px;
  }
  &:hover {
    font-weight: bold;
    color: #bf4625;
  }
`;

const DropdownMenu = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 160px;
  padding: 12px 16px;
  text-align: left;
`;

const DropdownItem = styled(Link)`
  color: black;
  padding: 8px 12px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
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

const Navbar1 = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <Containers>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>
              <img src="/image/kurmi.png" alt="kurmi samaaj Logo" />
            </Logo>
          </Link>
          <SearchContainer>
            <Input placeholder='यहाँ कुछ खोजें...' />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <MenuItem
            onMouseEnter={() => handleMouseEnter('biography')}
            onMouseLeave={handleMouseLeave}
          >
            <span>जीवन परिचय</span>
            {openDropdown === 'biography' ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
            <DropdownMenu open={openDropdown === 'biography'}>
              <DropdownItem to="/shivaji">वीर शिवाजी - एक दुर्जय सेनानी</DropdownItem>
            </DropdownMenu>
          </MenuItem>
          <MenuItem
            onMouseEnter={() => handleMouseEnter('gallery')}
            onMouseLeave={handleMouseLeave}
          >
            <span>गैलरी</span>
            {openDropdown === 'gallery' ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
            <DropdownMenu open={openDropdown === 'gallery'}>
              <DropdownItem to="/photo-gallery">फोटो गैलरी</DropdownItem>
              <DropdownItem to="/news">समाज न्यूज़</DropdownItem>
              <DropdownItem to="/video-gallery">वीडियो गैलरी</DropdownItem>
            </DropdownMenu>
          </MenuItem>
          <MenuItem
            onMouseEnter={() => handleMouseEnter('news')}
            onMouseLeave={handleMouseLeave}
          >
            <span>समाचार</span>
            {openDropdown === 'news' ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
          </MenuItem>
        </Center>
        <Right>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>मुख पृष्ठ</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>लॉग इन</MenuItem>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>रजिस्टर करे</MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Containers>
  );
};

export default Navbar1;
