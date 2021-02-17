<template>
  <div class="Home">
    <div v-if="user.user_email">
      <Navbar />
    </div>
    <div v-else>
      <b-container fluid class="container-header">
        <b-row>
          <b-col id="header-logo">
            <img src="@/assets/coffee1.png" /> <span> Coffee Shop </span>
          </b-col>
          <b-col id="header-logo" style="text-align:right">
            <button @click="$router.push('/login')">
              Login Here
            </button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div style="margin-top: -17px">
      <header class="homeImage">
        <hr class="mt-lg-3 d-none d-lg-block" />
        <b-container style="font-family: Poppins;">
          <b-row>
            <b-col lg="7" class="mt-lg-5 pt-lg-5">
              <div class="homeTitle">
                <h1>
                  Start Your Day with Coffee and Good Meals
                </h1>
                <p class="pr-lg-5 mt-lg-4">
                  We provide high quality beans, good taste, and healthy meals
                  made by love just for you. Start your day with us for a bigger
                  smile!
                </p>
                <button
                  class="btn_getStarted mb-lg-5 mt-lg-4 py-lg-3"
                  @click="product"
                >
                  Get Started
                </button>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </header>
      <main>
        <b-container>
          <b-row>
            <b-col lg="12">
              <div class="card_status mb-lg-5" style="font-family: Poppins;">
                <b-container fluid>
                  <b-row class="homeMenu">
                    <b-col lg="4" class="homeMid">
                      <div style="margin-right:15px">
                        <img src="../assets/user.png" alt="" />
                      </div>
                      <div>
                        <span style="font-weight:bold">90+</span>
                        <br />
                        <span> Staff </span>
                      </div>
                    </b-col>
                    <b-col lg="4" class="homeMid homeMidMid">
                      <div style="margin-right:15px">
                        <img src="../assets/location.png" alt="" />
                      </div>
                      <div>
                        <span style="font-weight:bold">30+</span>
                        <br />
                        <span> Stores </span>
                      </div>
                    </b-col>
                    <b-col lg="4" class="homeMid">
                      <div style="margin-right:15px">
                        <img src="../assets/user.png" alt="" />
                      </div>
                      <div>
                        <span style="font-weight:bold">800+</span>
                        <br />
                        <span> Customers </span>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
            </b-col>
            <b-col lg="6" md="12" sm="12">
              <div class="teamWork">
                <img src="../assets/teamWork.png" />
              </div>
            </b-col>
            <b-col lg="6" md="12" sm="12">
              <div style="padding-bottom:30px" class="teamworkMessage">
                <h2 style="font-family: Poppins;">
                  We Provide Good Coffee and Healthy Meals
                </h2>
                <h3
                  style="font-size:17px;font-weight:400;padding:30px 0px 30px 0px"
                >
                  You can explore the menu that we provide with fun and have
                  their own taste and make your day better.
                </h3>
                <div>
                  <img src="../assets/greenChecklist.png" style="width:20px" />
                  High quality beans
                </div>
                <div>
                  <img src="../assets/greenChecklist.png" style="width:20px" />
                  Healthy meals, you can request the ingredients
                </div>
                <div>
                  <img src="../assets/greenChecklist.png" style="width:20px" />
                  Free member card with a minimum purchase of IDR 200.000.
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/footer'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      user: 'setUser'
    })
  },
  methods: {
    postProduct() {
      this.$router.push({ name: 'PostProduct' })
    },
    postCoupon() {
      this.$router.push({ name: 'PostCoupon' })
    },
    edit() {
      this.$router.push({ name: 'EditProfile' })
    },
    history() {
      this.$router.push({ name: 'History' })
    },
    product() {
      this.$router.push({ name: 'Product' })
    }
  }
}
</script>
<style scoped>
.container-header {
  font-family: 'Rubik', sans-serif;
  background-color: white;
  padding: 20px;
  border-bottom: lightgray solid 3px;
  z-index: 1;
}
.homeMid {
  display: flex;
  justify-content: center;
}
.homeMidMid {
  border-right: 3px solid lightgrey;
  border-left: 3px solid lightgrey;
}
#header-logo {
  font-weight: bold;
  font-size: 20px;
  padding-top: 20px;
}
#header-logo button {
  padding: 5px 10px 5px 10px;
  background: #ffba33;
  border: 0;
  color: #6a4029;
  border-radius: 15px;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.59);
}
#header-logo button:hover {
  border: 2px solid #ffba33;
}
.homeImage {
  background-image: url('../assets/bg4.jpg');
  background-size: cover;
  height: 700px;
}
.homeMenu {
  text-align: center;
  padding-top: 40px;
}
.teamworkMessage div {
  font-weight: 300;
  margin-top: 20px;
}
.homeTitle {
  font-family: 'Rubik', sans-serif;
}
.homeTitle h1 {
  font-size: 50px;
  font-weight: 700;
  color: #ffffff;
}
.homeTitle p {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
}
.teamWork img {
  width: 100%;
}
button.btn_getStarted {
  width: 40%;
  border: none;
  outline: none;
  border-radius: 10px;
  color: #6a4029;
  font-weight: 700;
  background: #ffba33;
}
.card_status {
  height: 150px;
  position: relative;
  top: -80px;
  border-radius: 10px;
  box-shadow: 0px 70px 50px rgba(57, 57, 57, 0.1);
  background: #ffffff;
}

@media screen AND (max-width: 1000px) {
  .homeImage {
    padding-top: 50px;
  }
  .homeTitle h1 {
    font-size: 45px;
  }
  .homeMenu button {
    text-align: center;
    margin-top: 8px;
  }
  .homeMenu {
    padding-top: 20px;
  }
  .homeMid {
    padding-top: 15px;
    display: flex;
    justify-content: center;
  }
  .homeMidMid {
    border-right: 0px;
    border-left: 0px;
  }
  .card_status {
    height: 280px;
  }
}
</style>
