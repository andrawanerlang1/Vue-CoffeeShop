<template>
  <div>
    <b-container fluid id="wrapper">
      <b-row>
        <b-col cols="5" id="left">kiri</b-col>
        <b-col cols="7" id="right">
          <div id="top">
            <div class="left">
              <img src="../../assets/coffee1.png" /> Coffee Shop
            </div>
            <div class="right">Input New Password</div>
          </div>
          <div id="mid">
            <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
              New Password : <br />
              <input
                class="bottom"
                type="password"
                v-model="form.user_password"
                placeholder="Enter your password ..."
              />

              <button class="login" type="submit">Change Password</button>
            </b-form>
            <br />
            <br />
            <br />
            {{ query }}
            <hr style="height: 3px; background-color: #9f9f9f" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginComponent',
  data() {
    return {
      query: this.$route.query,
      form: {
        user_password: ''
      }
    }
  },

  methods: {
    ...mapActions(['resetPasswords']),
    async onSubmit() {
      const setData = {
        user_password: this.form.user_password,
        token_password: this.query.keys
      }
      this.resetPasswords(setData)
        .then(result => {
          this.$toasted.success(result)
          this.$router.push('/login')
        })
        .catch(error => {
          this.$toasted.error(error.data.msg)
        })
    }
  }
}
</script>

<style scoped>
#wrapper {
  height: 1000px;
}
#left {
  background-image: url('../../assets/b-login.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 1000px;
}
#top {
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 40px;
}
#top .right {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 35px;
  color: #6a4029;
  margin-top: 20px;
}
#top .left {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #6a4029;
  margin-top: 25px;
}
#mid {
  margin-right: 10%;
  margin-left: 10%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #4f5665;
}
#mid input {
  border-radius: 10px;
  height: 50px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 20px;
}
#mid input::placeholder {
  padding-left: 5px;
}
#mid input.bottom {
  margin-bottom: 5px;
}
.forgot {
  font-size: 17px;
  text-decoration: underline;
}
#mid button {
  border-radius: 10px;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 1px 0 rgba(0, 0, 0, 0.19);
}
#mid button.login {
  background-color: #ffba33;
}
#mid button#sign {
  background-color: #6a4029;
  color: white;
}
#signup div {
  color: lightgrey;
  background-color: white;
  position: relative;
  width: 250px;
  bottom: 35px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
}

@media (max-width: 800px) {
  #wrapper,
  #left {
    height: 820px;
  }
  #top .right {
    font-size: 27px;
  }
  #top .left,
  #mid {
    font-size: 13px;
  }
  .forgot {
    font-size: 10px;
  }
  #signup div {
    width: 170px;
    bottom: 30px;
    padding-left: 5px;
  }
}
@media (max-width: 650px) {
  #wrapper,
  #left {
    height: 720px;
  }
  #top .right {
    font-size: 24px;
  }
  #top .left,
  #mid {
    font-size: 10px;
  }
  .forgot {
    font-size: 8px;
  }
  #signup div {
    width: 120px;
    bottom: 25px;
    padding-left: 5px;
  }
}
@media (max-width: 450px) {
  #wrapper,
  #left {
    height: 750px;
  }
  #top {
    flex-direction: column;
  }
  #top .right {
    font-size: 18px;
  }
  #top .left,
  #mid {
    font-size: 11px;
  }
  .forgot {
    font-size: 6px;
  }
  #signup div {
    width: 100px;
    padding-left: 2px;
  }
}
</style>
