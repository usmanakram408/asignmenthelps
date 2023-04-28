import * as React from 'react';
import Rating from '../Components/Rating';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img13 from '../Images/user.webp';
import img14 from '../Images/capture 12.PNG'
function GroupExample() {
    return (

        <CardGroup>

            <Card>

                <div class="card-header">
                    <div class="row">

                        <div class="col-3"><img src={img13} alt="" /></div><br />
                        <div class="col-7">Cust.ID: <br /><Rating /><br />
                            <b>Sidney, Australia</b>
                        </div>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title>Management</Card.Title>
                    <Card.Text>
                        I had an urgent need of a management assignment expert and
                        there is no
                        doubt I had received an excellent quality assignment within 3 days. The quality
                        of the
                        assignment was really good and I recommend this site.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Written by: <b> Dipiya Jain </b></small>
                </Card.Footer>
            </Card>
            <Card>
                <div class="card-header">
                    <div class="row">
                        <div class="col-3"><img src={img13} alt="" /></div><br />
                        <div class="col-7">Cust.ID:  <br /><Rating /><br />
                            <b>Sidney, Australia</b>
                        </div>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title>Engineering</Card.Title>
                    <Card.Text>
                        Before 4 days of submission, I had found that my assignment on
                        engineering
                        is not even started. I had no other option than hiring the experts. I scored 90%
                        in it.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Written by: <b> Bhavana BP</b></small>
                </Card.Footer>
            </Card>
            <Card>
                <div class="card-header">
                    <div class="row">
                        <div class="col-3"><img src={img13} alt="" /></div><br />
                        <div class="col-7">Cust.ID:  <br /><Rating /><br />
                            <b>Sidney, Australia</b>
                        </div>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title>Creative arts</Card.Title>
                    <Card.Text>
                        For the first time, I outsourced my homework and I am more than
                        satisfied
                        with the service of this site. I got an 89% score on my homework. Thank you.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Written by: <b>Anita NAIR</b></small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}

export default GroupExample;