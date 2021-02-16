<template>
  <b-container fluid class="container-header">
    <b-row>
      <b-col id="header-logo">
        <img src="@/assets/coffee1.png" /> <span> Coffee Shop </span>
      </b-col>
      <b-col cols="8" id="header-menu">
        <b-container fluid class="container-header-menu navbarResponsive">
          <img src="../../assets/menu.png" @click="showModalNav" />
          <b-modal ref="nav-modal" hide-footer title="Menu Selection">
            <b-row>
              <b-col lg="3" sm="6" xs="12">
                <router-link to="/" style="color:black">
                  Home
                </router-link>
              </b-col>
              <b-col lg="3" sm="6" xs="12">
                <router-link to="/product" style="color:black">
                  Product
                </router-link>
              </b-col>
              <b-col lg="3" sm="6" xs="12">
                <router-link
                  to="/dashboard"
                  v-if="user.user_role === 1"
                  style="color:black"
                >
                  Dashboard
                </router-link>
              </b-col>
              <b-col lg="3" sm="6" xs="12">
                <div
                  @click="showModalPost"
                  v-if="user.user_role === 1"
                  style="color:black"
                >
                  Post-Items
                </div>
              </b-col>
              <b-col lg="3" sm="6" xs="12">
                <router-link
                  to="/cart"
                  v-if="user.user_role === 0"
                  style="color:black"
                >
                  Your cart
                </router-link>
              </b-col>

              <b-col lg="3" sm="6" xs="12" id="history">
                <router-link
                  to="/history"
                  v-if="user.user_role === 0"
                  style="color:black"
                >
                  History
                </router-link>
              </b-col>
            </b-row>
            <b-button
              class="mt-2"
              variant="outline-warning"
              block
              @click="hideModal()"
              >close</b-button
            >
          </b-modal>
          <b-modal ref="post-modal" hide-footer title="Post Selection">
            <b-row style="text-align:center">
              <b-col lg="12" sm="12" xs="12">
                <router-link to="/PostProduct" style="color:black">
                  Post Product
                </router-link>
              </b-col>
              <b-col lg="12" sm="12" xs="12">
                <router-link to="/PostCoupon" style="color:black">
                  Post Coupon
                </router-link>
              </b-col>
            </b-row>
            <b-button
              class="mt-2"
              variant="outline-warning"
              block
              @click="hideModal()"
              >close</b-button
            >
          </b-modal>
        </b-container>
        <b-container fluid class="container-header-menu navbarHideable">
          <b-row>
            <b-col lg="3" sm="6" xs="12" id="home">
              <router-link to="/">
                Home
              </router-link>
            </b-col>
            <b-col lg="3" sm="6" xs="12" id="product">
              <router-link to="/product">
                Product
              </router-link>
            </b-col>
            <b-col lg="3" sm="6" xs="12" id="cart" v-if="user.user_role === 0">
              <router-link to="/cart">
                Your cart
              </router-link>
            </b-col>
            <b-col
              lg="3"
              sm="6"
              xs="12"
              id="history"
              v-if="user.user_role === 0"
            >
              <router-link to="/history">
                History
              </router-link>
            </b-col>
            <b-col lg="3" sm="6" xs="12" id="cart" v-if="user.user_role === 1">
              <router-link to="/dashboard">
                Dashboard
              </router-link>
            </b-col>
            <b-col lg="3" sm="6" xs="12" id="cart" v-if="user.user_role === 1">
              <div @click="showModalPost">
                Post-Items
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
      <b-col id="header-account">
        <b-row>
          <b-col>
            <router-link to="/search">
              <img src="@/assets/Vector.png" />
            </router-link>
          </b-col>
          <div id="editProfile" @click="editProfile(user.user_id)">
            <img src="@/assets/blankprof.jpg" style="border-radius: 50%;" />
          </div>
          <b-col>
            <div id="logout">
              <button @click="handleLogout">Logout</button>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      user_id: "",
    };
  },
  computed: {
    ...mapGetters({ user: "setUser" }),
  },
  methods: {
    ...mapActions(["logout", "delCarts"]),
    ...mapMutations(["delMonthReport"]),

    handleLogout() {
      this.delCarts();
      this.logout();
      this.delMonthReport();
    },
    editProfile(user_id) {
      this.$router.push({ name: "EditProfile", params: { id: user_id } });
    },
    showModalNav() {
      this.$refs["nav-modal"].show();
    },
    showModalPost() {
      this.$refs["post-modal"].show();
    },
    hideModal() {
      this.$refs["nav-modal"].hide();
      this.$refs["post-modal"].hide();
    },
  },
};
</script>

<style scoped>
.navbarResponsive {
  display: none;
}
#editProfile img:hover {
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2),
    2px 2px 2px 2px rgba(0, 0, 0, 0.19);
}
#editProfile img {
  width: 40px;
}
#logout {
  text-align: center;
}
#logout button {
  background-color: wheat;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 12px;
  border-radius: 12px;
  height: 30px;
  margin-top: 15px;
}
.container-header a:link,
.container-header a:visited {
  color: black;
  text-decoration: none;
}
.container-header {
  font-family: "Rubik", sans-serif;
  background-color: white;
  padding: 20px;
  border-bottom: lightgray solid 3px;
  z-index: 1;
}
#header-logo {
  font-weight: bold;
  font-size: 20px;
  padding-top: 20px;
}
#header-menu {
  color: black;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 20px;
}
#header-menu div {
  padding-left: 10px;
  text-align: center;
}
#header-account img {
  background-color: white;
  margin-top: 10px;
}
#home:hover,
#product:hover,
#cart:hover,
#history:hover {
  font-weight: bold;
  border-bottom: 3px solid black;
}
@media (max-width: 550px) {
  #header-account {
    border-top: 2px black solid;
  }
  .navbarHideable {
    display: none;
  }
  .navbarResponsive {
    display: flex;
    flex-direction: row-reverse;
    margin-top: -10px;
  }
  .navbarResponsive img {
    width: 50px;
    height: 50px;
  }
}
@media (max-width: 400px) {
  #header-logo span {
    display: none;
  }
}
</style>
