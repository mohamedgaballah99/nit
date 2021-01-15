<template>
  <div class="nav">
    <div class="container">
      <nav class="navbar navbar-expand-md ">
        <!-- Brand -->
        <a class="navbar-brand"
          ><img src="../assets/imges/logo.jpg" alt="Logo" style="width:200px;"
        /></a>

        <!-- Toggler/collapsibe Button -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"> </span>
        </button>

        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ">
            <router-link to="/" exact tag="li"
              ><a class="nav-link">Home</a></router-link
            >
            <router-link to="/About" tag="li"
              ><a class="nav-link" href="#">About</a></router-link
            >
            <router-link to="/Product" tag="li"
              ><a class="nav-link" href="#">Product</a></router-link
            >
            <router-link to="/Contact" tag="li"
              ><a class="nav-link" href="#">Contact Us</a></router-link
            >
            <router-link to="/user" tag="li"
              ><a class="nav-link" href="#"
                ><img src="../assets/icons/1.png" /> </a
            ></router-link>
            <router-link to="/fav" tag="li" class="fav"
              ><a class="nav-link" href="#"
                ><img src="../assets/icons/2.png"/></a
            ></router-link>
            <router-link to="/cart" tag="li"
              ><a class="nav-link" href="#"
                ><img src="../assets/icons/3.png" /> </a
            ></router-link>
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
<style lang="scss" scoped>
.nav {
  padding: 5px;
  background-color: #e7e9e8;
  border-bottom: 1px solid #076861;
  .navbar-toggler {
    background-color: white;
    .navbar-toggler-icon {
      background-color: #076861 !important;
      border-radius: 10px;
    }
  }
  .navbar-brand {
    img {
      border-top-right-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
  .navbar-collapse {
    justify-content: flex-end;
  }
  ul {
    li {
      margin-left: 30px;
      font-weight: 600;
      a {
        text-decoration: none;
        color: black;
      }
      
    }
    .fav {
        a{
          position: relative;
        
        .abs {
            position: absolute;
            top: 0;
            left:0;
          }
        }
      }
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .navbar-collapse {
    margin-top: 30px;
  }
}
</style>
