<template>
  <div class="owel">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-7">
          <p>
            <span>50% DISCOUNT</span><br />
            <label>the latest collection</label>
          </p>
        </div>
        <div class="col-sm-12 col-md-5">
          <img src="../assets/imges/discount.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "owel",
};
</script>
<style lang="scss" scoped>
.owel {
  margin-top: 60px;
  .container {
    .row {
      .col-md-7 {
        background-color: #0fbbad;
        p {
          margin-top: 120px;
          font-weight: bold;
          font-size: 50px;
          span {
            color: white;
            font-size: 60px;
          }
          label {
            color: black;
          }
        }
      }
      .col-md-5 {
        img {
          width: 100%;
        }
      }
    }
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .owel {
    .container {
      .row {
        .col-md-7 {
          margin: 12px;
          p {
            margin-top: 70px;
            margin-bottom: 40px;
            span {
              font-size: 40px;
            }
            label {
              font-size: 30px;
            }
          }
        }
        .col-md-5 {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .owel {
    .container {
      .row {
        .col-md-7 {
          p {
            margin-top: 70px;
            margin-bottom: 40px;
            span {
              font-size: 40px;
            }
            label {
              font-size: 30px;
            }
          }
        }
        .col-md-5 {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .owel {
    .container {
      .row {
        .col-md-7 {
          p {
            margin-top: 120px;
            margin-bottom: 40px;
            span {
              font-size: 60px;
            }
            label {
              font-size: 50px;
            }
          }
        }
        .col-md-5 {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
