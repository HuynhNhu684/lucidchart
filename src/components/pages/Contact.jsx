import React from 'react'

const Contact = () => {
  return (
    <div>

<form class="row g-3">
  <div class="col-md-3">
    <label for="inputPassword4" class="form-label">First Name</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="First Name"/>
  </div>
  <div class="col-md-3">
    <label for="inputEmail4" class="form-label">Last Name</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Last Name"/>
  </div>
  <div class="col-md-3">
    <label for="inputEmail4" class="form-label">Company Email</label>
    <input type="email" class="form-control" id="inputEmail4"placeholder="Company Email"/>
  </div>
  <div class="col-md-3">
    <label for="inputEmail4" class="form-label">Phone Number</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Phone Number (Optional)"/>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Details</label>
    <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">How can we help you?</label>
</div>
  </div>
  <div class="col-6">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
     
     
    </div>
  )
}

export default Contact
