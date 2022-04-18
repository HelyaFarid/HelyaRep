import './style.css'
import { Form, FormGroup, Input, Button } from 'reactstrap';
import AvatarCard from "../AvatarCard"
import bgImage from '../../bgimage.jpg';

const form = () => {

  return (
    <div className="hero">
        <div className="hero-body">
          <div style={{width:"50%"}}>
        <AvatarCard />
        </div>
        <div className="primary-content">
          
          <FormGroup className="search-wrapper">
         
              <section className="search-box">
                <Input
                  id="typeSearch"
                  name="search"
                  placeholder="Type of Therapy"
                  type="search"
                />
                <Input
                  id="suburbSearch"
                  name="search"
                  placeholder="Suburb or Postcode"
                  type="search"
                />
                 <div className='btn'>
                <Button 
                  color="secondary"
                  outline
                >
                  Search
                </Button>
                </div>
              </section>
            </FormGroup>
          
          </div>
      </div>
    </div>

    // <Form className="wrapper">

    //   <FormGroup className="search-wrapper">
    //     <section class="search-box">
    //       <Input
    //         id="typeSearch"
    //         name="search"
    //         placeholder="Type of Therapy"
    //         type="search"
    //       />
    //       <Input
    //         id="suburbSearch"
    //         name="search"
    //         placeholder="Suburb or Postcode"
    //         type="search"
    //       />
    //       <Button
    //         color="success"
    //         active size="lg"
    //       >
    //         Search
    //       </Button>
    //     </section>
    //   </FormGroup>
    // </Form>

  )
}
export default form