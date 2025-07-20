import Form from './Form'

export default function Quote() {
  return (
    <div className='flex justify-between'>
        <div className='w-[50vw]'>

        <div >
            <div>Products Offered</div>
        </div>
        <div>
            We Provide The Best Pool Service For Your daily life Style!
        </div>
        <div>
            We are backed by a robust infrastructural base, which gives our professionals a number of facilities to keep smooth activities within the organization. With all infrastructural units at our support, procurement, quality testing, delivering and construction services are done in an uninterrupted manner. Also, all procured goods are tested for possessing required attributes to avoid any error on our part. Working under the supervision of our quality controllers, we have given optimum level of satisfaction to our valued clients.
        </div>
        </div>
        <div className='w-[50vw]'>
            <Form></Form>
        </div>
    </div>
  )
}
