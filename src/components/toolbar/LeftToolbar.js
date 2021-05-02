import React from 'react'
import { States_Capitals } from './States_capitals'
import { InputGroup, FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// * CSSS
import './toolbar.css'
const LeftToolbar = () => {
  return (
    <section className='firstHalf'>
      <h3>Select Your Location</h3>
      <InputGroup size='sm' className='mb-3'>
        <FormControl placeholder='Enter your Location' />
      </InputGroup>
      <div className='captials-button'>
        {States_Capitals.map((element, index) => (
          <CreateCapitalButton key={index} {...element} />
        ))}
      </div>
    </section>
  )
}

const CreateCapitalButton = (props) => {
  const { capital } = props
  return (
    <Button size='sm' className='left_toolbar_capitals m-1'>
      {capital}
    </Button>
  )
}
export default LeftToolbar
