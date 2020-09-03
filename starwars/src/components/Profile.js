import React from 'react';
import styled from 'styled-components';
import image from './usethisone.jpg';
const Paragraph = styled.h1`
color: white;
text-transform: uppercase;
text-align: center;
font-family: 'Londrina Solid', cursive; 
padding: 0.5rem;
letter-spacing = 2px;
`;
const Paragraph2 = styled(Paragraph)`
font-family: 'Balsamiq Sans', cursive;
color: #A52A2A;
font-size: 150%;
`;
const Div = styled.div`
background-image: url(${image});
background-size: cover;
border: 1px solid gold;
width: 90%;
margin: 20px 50px;
display: flex;
flex-direction: row;
justify-content: space-between;
`;
const Profile = (props) => {
const {name, birthYear} = props;
return (
    <Div className="character">
        <Paragraph>{name}</Paragraph>  
        <Paragraph2>{birthYear}</Paragraph2>
    </Div>
);
};

export default Profile;