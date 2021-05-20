<?php
  include("header.php")
?>
<div>
  <div class="col-12" style="text-align:right">
    <a href="updateForm.php"><button class='btn btn-sm' style="background:blue">account settings</button></a>
  </div>
    <h3>Dashboard</h3>
</div>

<div class="col-12" style="text-align:right">
  <div id="welcomemsg">Welcome <span id="userName">!</span>
    <button type="submit" onclick="logOut()">logout</button>
  </div>
</div>
<div class="col-6" >
  <form id = "myForm" onsubmit = "return false" method = "post">
    <input type = "text" class="form-control" id="newInput" placeholder="list name">
    <button type="submit" id ="newBtn">NewList</button>
  </form>

</div>
<div class = "col-12" id = "divList">
  <ul id="list" style="list-style:none">

  </ul>
  <table class="table table-bordered" id = "table">
  </table>
</div>
<script src="js/my_details.js"></script>
<?php
  include("footer.php")
?>
