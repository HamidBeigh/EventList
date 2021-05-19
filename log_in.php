<?php
  include("header.php")
?>
<div class="text" style="text-align:center">
  <h2>Login to your account<h2>
</div>
<a href="index.php">home<a>
<form id="login_form" method="post">
  <div class="mb-3">
    <label>Email</label>
    <input type="email" class="form-control" id="userId" placeholder="email">
  </div>
  <div class="mb-3">
    <label>Password</label>
    <input type="password" class="form-control" id="userPwd" placeholder="password">
  </div>
  <div class="mb-3">
    <input type="submit" class="btn btn-primary btn-sm" value="Login">
  </div>
</form>
<script src="js/login.js"></script>
<?php
  include("footer.php")
?>
