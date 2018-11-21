import React from 'react';
import ReactDOM from 'react-dom';

import ToDo from './ToDo';
import { Grid, Header, Button, Checkbox, Icon, Card, Message, Progress} from 'semantic-ui-react';

class ToDoList extends React.Component {
    render(){
        return (
            <div>
                <Header size='huge'>To-Do List</Header>
                <Progress value='0' total='10' progress='ratio' label='Tasks completed' color='blue'/>
                <Grid columns={1}>
                    <Grid.Column>
                        <Checkbox toggle label='Simple View'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Button primary icon labelPosition='left'>
                            <Icon name='add'/>
                            New Todo
                        </Button>
                    </Grid.Column>
                </Grid>
                <hr/>
                {/* <Message size='massive' color='blue'>Awesome! You're all done! Go relax!</Message> */}
                <Card.Group centered>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Clean Room</Card.Header>
                            <Card.Meta>
                                <p>Assigned to:  
                                    <Icon circular inverted color='grey' name='user'/>
                                    <Icon circular inverted color='grey' name='user'/>
                                    <Icon circular inverted color='grey' name='user'/>
                                    <p>+ 4 more</p>
                                </p>
                            </Card.Meta>
                            <Card.Description>
                                Room needs to be cleaned
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <p>Due 1/2/18</p>
                            <Button.Group>
                                <Button negative>Delete</Button>
                                <Button.Or/>
                                <Button positive>Finished</Button>
                            </Button.Group>
                        </Card.Content>
                    </Card>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Wash the dishes</Card.Header>
                            <Card.Description>The dishes are in the kitchen and they need to be washed.</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <p>Due 12/12/18</p>
                            <Button.Group>
                                <Button negative>Delete</Button>
                                <Button.Or/>
                                <Button positive>Finished</Button>
                            </Button.Group>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        );
    }
}

export default ToDoList;