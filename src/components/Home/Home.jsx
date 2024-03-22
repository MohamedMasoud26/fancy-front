import Recent from '../Recent/Recent';
import Partners from '../Partners/Partners';

export default function Home() {
  


  return (<>
    
    <section className="container my-md-1 py-md-3 mt-5 mh">
      <Recent></Recent>
      
  
        <div className="row home-cover py-5  mt-4  ">
          <div className=" text-center ">
            <div className="slougan pac-man py-5  ">
            <h1>MAKE YOUR BRAND <span className=""> FANCY</span></h1>
            <h2> JUST LIKE OUR <span className="">AGENCY</span></h2>
            </div>
            <h5>Our ad agency seeks to provide everything that’s new and creative for our clients.
              Our work isn’t limited with social media, but also designing and printing.
              We aim to provide all that’s needed for you. 
              We will provide the best quality services for you.</h5>
              <h2 className='py-2 '>Who are <span className="WE">We</span> </h2>
              <h5>Our ad agency seeks to provide everything that’s new and creative for our clients.</h5>
          </div>
        </div>
        <Partners></Partners>
        
    </section>
    
    
  </>
  )
}
