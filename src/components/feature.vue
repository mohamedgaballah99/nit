<template>
  <div class="feature">
    <div class="container">
      <h1><span>Featured </span>Brands</h1>
      <div class="row">
        <div class="col-sm-12 col-md-6 ">
          <div class="img">
            <img src="../assets/icons/p1.png" />
          </div>
          <h4>JANE DESIGN CHAIR</h4>
          <p>50.00$</p>
        </div>
        <div class="col-sm-12 col-md-6  ">
          <div class="img mb-10">
            <img src="../assets/icons/p2.png" />
          </div>
          <h4>JANE DESIGN CHAIR</h4>
          <p>180.00$</p>
        </div>
        <div class="col-sm-12 col-md-6  ">
          <div class="img">
            <img src="../assets/icons/p3.png" />
          </div>
          <h4>JANE DESIGN CHAIR</h4>
          <p>100.00$</p>
        </div>
        <div class="col-sm-12 col-md-6 ">
          <div class="img">
            <img src="../assets/icons/p4.png" />
          </div>
          <h4>JANE DESIGN CHAIR</h4>
          <p>120.00$</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "feature",
};
</script>
<style lang="scss" scoped>
.feature {
  .container {
    > h1 {
      text-align: center;
      color: black;
      font-size: 50px;
      margin-bottom: 70px;
      span {
        color: #25f7e6 !important;
      }
    }
    .row {
      .col-md-6 {
        margin-bottom: 30px;
        .img {
          margin: 20px;
          img {
            margin-bottom: 20px;
          }
        }
        h4 {
          color: black;
        }
        p {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
