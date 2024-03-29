import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const DashboardItem = ({count,photo,title,desc,date,id}) => {
  return (
    <tr>
    <td>{count+1}</td>
    <td><img width={30} src={photo} alt="" /></td>
    <td>{title}</td>
    <td>{desc.substring(0,99)}..</td>
    <td>{date}</td>
    <td>
    <LinkContainer to={`/edit/${id}`}>
      <Button variant='warning'>Edit</Button>
      </LinkContainer>
    </td>
  </tr>
  )
}

export default DashboardItem