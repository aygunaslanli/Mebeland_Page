import React from 'react'
import { Card, Col, Row,Container, Button } from 'react-bootstrap'
import "../sass/404.scss"

const NotFoundPage = () => {
  return (
    <div>
<Container>
<Row>
<Col sm={12} md={6}>
<Card className='card-404'>
      <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/1091845697462083585/1142497099607462009/armchair-FTMDCEX-pd4yh63veeomdcrj9f7gc73nrl185u496i54cwh3pi.png" />
 </Card>
</Col>
<Col sm={12} md={6}>
<Card className='card-404'>
      <h1>404</h1>
      <Card.Body>
        <Card.Title>
      <h2>Something's Missing.</h2>
       </Card.Title>
        <Card.Text>
          The page you were looking for couldn’t be found.
        </Card.Text>
        <Button variant="primary">Go Back</Button>
      </Card.Body>
    </Card>
</Col>
</Row>
</Container>
</div>

  )
}

export default NotFoundPage