import React, { useState } from 'react';

const Contact = ()=> {

  const [data,setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
  });

  const inputEvent = (event)=> {
    const {name, value} = event.target;
     setData((preval) => {
      return {
        ...preval,
        [name] : value,
      };
     });
  };


  const formSubmit = (e) => {
    e.preventDefault();
    alert(`my name is ${data.fullname} . my mobile number is ${data.phone} . my email is ${data.email}. i want to say that ${data.msg}`)   
  }

  return (
    <React.Fragment>

        <div className=' my-5'>
          <h1 className=' text-sm-center'>Contact Us</h1>
        </div>

        <div className=' container contact_div'>
          <div className=' row'>
            <div className=' col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
            <div class="form-group">
              <label for=" exampleFormControlInput1" className=' form-label'>FullName</label>

              <input type="text " class="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={inputEvent} placeholder="Enter Your Name"/>
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleFormControlInput1">Phone</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={inputEvent} placeholder="Mobile Number"/>
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={inputEvent} placeholder="name@example.com"/>
            </div>
            <br></br>

            <div class="form-group">
              <label for="exampleInputPassword1">Message</label>
              <textarea className=' form-control' id='exampleFormControlInput1'
              rows="3"
              name='msg'
              value={data.msg}
              onChange={inputEvent}
              >
              
              </textarea>
            </div>
            <br></br>
  
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
            </div>
          </div>
        </div>      
    </React.Fragment>
  );
}

export default Contact;