<template>

  

  
  <header class="p-2 bg-dark  ">
    <div class="">
      <div class=" d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        <div class="dropdown me-3">
          <a href="#" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0  text-decoration-none dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
            <span> Vietnamese(VN)</span>
          </a>
          <ul class="dropdown-menu text-small shadow">
            <li><a class="dropdown-item active" href="#" aria-current="page">Vietnamese</a></li>
            <li><a class="dropdown-item" href="#">English</a></li>
            <li><a class="dropdown-item" href="#">Japanese</a></li>
            <li><a class="dropdown-item" href="#">Korean</a></li>
            <li><a class="dropdown-item" href="#">Spanish</a></li>

          </ul>
        </div>

        <div class="flex-shrink-0 dropdown">
          <a href="#" class="d-block text-decoration-none dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
            <span>Lê Phước Vinh</span>
            <img src="../images/B1910176.JPG" alt="mdo" width="45" height="45" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small shadow">
            <li><a class="dropdown-item" href="profile.php">Hồ sơ</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="logout.php">Đăng xuất</a></li>
          </ul>
        </div>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Tìm Kiếm</button>
          <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <i class="fa-regular fa-user"></i>
          </button>
        </div>
      </div>
    </div>
   
  </header>
   <!-- dang nhap -->
   <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <div class="row g-3">
              <div class="col">
                <h5 class="modal-title fs-5" id="staticBackdropLabel">Đăng nhập</h5>
                <form class="was-validated" method="POST" style="display: inline;">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input name="email" type="email" class="form-control is-valid" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mật khẩu</label>
                    <input name="password" type="password" class="form-control is-valid" id="exampleInputPassword1" required>
                  </div>
                  <input name="vaitro" type="text" hidden value="1">
                  <div class="mb-3 form-check">
                    <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck1" aria-describedby="invalidCheck3Feedback" required>
                    <label class="form-check-label" for="exampleCheck1">Ghi nhớ mật khẩu</label>
                  </div>

                  <button type="submit" class="btn btn-primary">Submit</button>

                  <div class="my-3"><a href="">Quên mật khẩu</a></div>
                </form>
              </div>
              <div class="col">
                <h5 class="modal-title fs-5" id="staticBackdropLabel1">Đăng ký</h5>
                <form class="was-validated" method="POST" style="display: inline;">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input name="email" type="email" class="form-control is-valid" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mật khẩu</label>
                    <input name="password" type="password" class="form-control is-valid" id="exampleInputPassword1" required>
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Nhập lại mật khẩu</label>
                    <input name="password" type="password" class="form-control is-valid" id="exampleInputPassword1" required>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
 
</template>
<script>

export default {
    

}
</script>

<style>

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-divider1 {
  height: 1.5rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100%;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>


    