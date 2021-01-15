<template>
  <div class="contact">
    <div class="container">
        <h1><span>Contact  </span>Us</h1>
      <div class="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.716400868083!2d31.215881285557447!3d30.016298626858056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846e0f9ec8325%3A0x5c511fc61fdc7ca9!2z2K_ZhdmK2KfYtw!5e0!3m2!1sar!2seg!4v1610740121198!5m2!1sar!2seg"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          class="col-sm-12 col-md-6"></iframe>

          <form class="col-sm-12 col-md-6 text-left">
            <div class="form-group">
              <label for="usr">Name:</label>
              <input type="text" class="form-control" placeholder="Enter Name"/>
            </div>
            <div class="form-group">
              <label for="email">Email address:</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="phone">Phone:</label>
              <input type="text" class="form-control" placeholder="Enter Phone"/>
            </div>
            <div class="form-group">
              <label for="comment">Message:</label>
              <textarea class="form-control" rows="5" placeholder="Message"></textarea>
            </div>
            <button type="submit" class="btn btn-green">Send</button>
          </form>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contact,",
};
</script>
<style lang="scss" scoped>
    .contact{
        margin-top: 100px;
       
        .container{
             
            > h1 {
            text-align: center;
            color: black;
            font-size: 50px;
            margin-bottom: 70px;
            span {
                color: #25f7e6 !important;
            }
            }
    .row{
        background-color: rgba(218, 218, 218, 0.432);
        padding: 20px;
        iframe{
            margin-bottom: 60px;
        }
        form{
            button{
                background-color: #25f7e6;
                color: black;
                font-weight: bold;
                margin-bottom: 5px;
            }
        }
        }
    }
}
</style>
