<template>
  <div>
    <!-- Footer -->
    <footer class="page-footer font-small pt-4 footer">
      <!-- Footer Elements -->
      <div class="container">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-md-6 mb-4"></div>
          <!--Grid column-->
          <!--Grid column-->
          <div class="col-md-6 mb-4">
            <form class="input-group">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Your email"
                aria-label="Your email"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-sm btn-outline my-0" type="button">
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Footer Elements -->

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="#"> PimpMyphone</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800");

.footer {
  background-color: #3ab9a9;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
