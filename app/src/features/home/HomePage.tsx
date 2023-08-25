import { Link } from "react-router-dom";
import { Button, Container, Header, Image, Segment } from "semantic-ui-react";

export default function HomePage() {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image src='/assets/logo.png' alt='Logo' style={{ marginBottom: 15, width: '125px', height: "125px" }} />
                    My Finances
                </Header>
                <>
                    <Header inverted as='h2' content='Welcome to My Finances' />
                    <Button as={Link} to='/dashboard' size='huge' style={{ marginTop: "3vh" }} inverted>
                        Go to Dashboard
                    </Button>
                </>
            </Container>
        </Segment>
    )
}