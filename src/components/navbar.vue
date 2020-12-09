<template>
  <div class="navb">
    <div class="container-fluid">
      <nav class="navbar fixed-top navbar-expand-lg navbar-light">
        <a
          class="navbar-brand logo"
          href="/homepage"
          style="margin-right: -15rem"
        >
          <img src="../assets/logo.png" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto text-center">
            <li class="nav-item">
              <a class="nav-link" href="/reparer">reparer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#block2">comment sa marche ?</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
.navbar {
  background: transparent;
}
.navbar img {
  width: 20%;
  float: left;
}
.navbar a {
  color: #8a8888 !important;
}
.navbar a:hover {
  color: #3ab9a8 !important;
}

.navbar-brand .logo {
  margin-right: -14rem !important;
}
</style>