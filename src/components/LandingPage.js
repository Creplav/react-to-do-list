import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import image from '../images/collab.jpeg';
class LandingPage extends React.Component {
        render() {
            return (
                <Container textAlign='center'>
                    <Header as='h1' size='huge'>Co-Do</Header>
                    <Header as="h3">Collaborative, Geographical, To-Do Lists</Header>
                    <Image src={image} centered/>
                </Container>
            )
        }
}

export default LandingPage;