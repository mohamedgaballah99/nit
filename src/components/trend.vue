<template>
  <div class="trend">
    <div class="container">
      <h1><span>Trending </span>Categories</h1>
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <div class="img">
            <img src="../assets/imges/1.jpg" />
          </div>
          <h4>Outdoor</h4>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="img">
            <img src="../assets/imges/2.jpg" />
          </div>
          <h4>Living Room</h4>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="img">
            <img src="../assets/imges/3.jpg" />
          </div>
          <h4>Bedroom Lighting</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "trend",
};
</script>
<style lang="scss" scoped>
.trend {
  margin-top: 150px;
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
      .col-sm-12 {
        .img {
          width: 100%;
          margin-bottom: 45px;
          overflow: hidden;
          border-top-right-radius: 20%;
          border-bottom-left-radius: 20%;
          &:hover {
            box-shadow: 2px 2px 10px #25f7e6;
          }

          img {
            width: 100%;
            border-top-right-radius: 20%;
            border-bottom-left-radius: 20%;
            transition: 0.5s all;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
        h4 {
          color: black;
          font-size: 30px;
          text-align: center;
        }
      }
    }
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .trend {
    margin-top: 100px;
    .container {
      > h1 {
        font-size: 40px;
        margin-bottom: 50px;
        span {
          font-size: 50px;
        }
      }
      .row {
        .col-sm-12 {
          margin-bottom: 40px;
          .img {
            margin-bottom: 35px;
          }
          h4 {
            font-size: 25px;
          }
        }
      }
    }
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .trend {
    margin-top: 70px;
    .container {
      > h1 {
        font-size: 40px;
        margin-bottom: 50px;
        span {
          font-size: 50px;
        }
      }
      .row {
        .col-sm-12 {
          margin-bottom: 40px;
          .img {
            margin-bottom: 35px;
          }
          h4 {
            font-size: 25px;
          }
        }
      }
    }
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .trend {
    margin-top: 150px;
    .container {
      > h1 {
        font-size: 40px;
        margin-bottom: 50px;
        span {
          font-size: 50px;
        }
      }
      .row {
        .col-sm-12 {
          margin-bottom: 40px;
          .img {
            margin-bottom: 45px;
          }
          h4 {
            font-size: 25px;
          }
        }
      }
    }
  }
}
</style>
