<?php
  include("header.php")
?>
<div class="text" style="text-align:center">
  <h2>Update Your Account<h2>
</div>
<div>
  <div class="col-12" id="error" style="color:red"></div>
  <div class="">
    <form id="myForm" onsubmit="return false" method="post">
      <div class="mb-3">
        <label>First Name</label>
        <input type="text" class="form-control" id="fname" placeholder="first name">
      </div>
      <div class="mb-3">
        <label>Last Name</label>
        <input type="text" class="form-control" id="lname" placeholder="last name">
      </div>
      <div class="mb-3">
        <label>Password</label>
        <input type="password" class="form-control" id="password" placeholder="password">
      </div>
      <div class="mb-3">
        <input type="submit" class="btn btn-primary btn-sm" value="Update">
        <input type="submit" class="btn btn-primary btn-sm" onclick = "cencelUpdate()" value="cancel">
      </div>
    </form>
  </div>
</div>
<script src="js/updateUser.js"></script>
<?php
  include("footer.php")
?>
