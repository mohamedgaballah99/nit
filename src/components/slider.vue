<template>
  <div class="slider">
    <!-- <div class="jumbotron">
        <h1>Bootstrap Tutorial</h1>
        <p>Bootstrap is the most popular HTML, CSS...</p>
        </div> -->
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-5">
          <p>
            <span>THE LATEST</span><br />
            <label>FURNITURE DESIGN</label>
          </p>
        </div>

        <div class="col-sm-12 col-md-7">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            <!-- The slideshow -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/imges/1.jpg" />
              </div>
              <div class="carousel-item">
                <img src="../assets/imges/2.jpg" />
              </div>
              <div class="carousel-item">
                <img src="../assets/imges/3.jpg" />
              </div>
            </div>

            <!-- Left and right controls -->
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "slider",
};
</script>
<style lang="scss" scoped>
.slider {
  background-color: #e7e9e8;
  padding-top: 70px;
  padding-bottom: 70px;
  .container {
    .row {
      .col-md-5 {
        text-align: left;
        margin-top: 10px;
        font-size: 70px;
        font-weight: bold;
        span {
          color: #076861;
        }
        label {
          color: black;
        }
      }
      .col-md-7 {
        img {
          border-radius: 10px;
          border: 1px solid #076861;
        }
      }
    }
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .slider {
    padding-top: 70px;
    padding-bottom: 70px;
    .container {
      .row {
        .col-md-5 {
          font-size: 49px;
          margin: 20px;
        }
      }
    }
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .slider {
    padding-top: 70px;
    padding-bottom: 70px;
    .container {
      .row {
        .col-md-5 {
          font-size: 45px;
          margin-top: 60px;
        }
      }
    }
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .slider {
    padding-top: 70px;
    padding-bottom: 70px;
    .container {
      .row {
        .col-md-5 {
          font-size: 55px;
          margin-top: 60px;
        }
      }
    }
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .slider {
    padding-top: 70px;
    padding-bottom: 70px;
    .container {
      .row {
        .col-md-5 {
          font-size: 70px;
          margin-top: 30px;
        }
      }
    }
  }
}
</style>
