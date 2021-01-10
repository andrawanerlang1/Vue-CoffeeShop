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
            <div class="right">Sign Up</div>
          </div>
          <div id="mid">
            <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
              Email Address : <br />
              <input
                type="email"
                v-model="form.user_email"
                placeholder="Enter your email adress"
              />
              <br />
              Password : <br />
              <input
                class="bottom"
                type="password"
                v-model="form.user_password"
                placeholder="Enter your password"
              />
              <br />
              <br />
              Phone Number : <br />
              <input
                class="bottom"
                type="number"
                v-model="form.user_number"
                placeholder="Enter your phone number"
              />
              <br />
              <br />
              <br />
              <button class="login" type="submit">Sign Up</button>
              <br />
              <button class="reset" type="reset">Reset</button>
            </b-form>
            <br />
            <br />
            <br />
            <hr style="height:3px;background-color:#9F9F9F;" />
            <div id="signup">
              <div>
                Already have an account?
              </div>
              <router-link to="/login">
                <button id="sign">Login here</button>
              </router-link>
            </div>
            <b-modal
              id="modal"
              ref="my-modal"
              hide-footer
              title="Account created successfully"
            >
              <div class="d-block text-center">
                <h3>now, you can login</h3>
              </div>
              <router-link to="/login">
                <b-button class="mt-3" variant="outline-success" block
                  >Go to Login Page</b-button
                >
              </router-link>
            </b-modal>
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
      form: {
        user_email: '',
        user_password: '',
        user_number: ''
      }
    }
  },

  methods: {
    ...mapActions(['register']),
    onSubmit() {
      if (
        !this.form.user_email ||
        !this.form.user_number ||
        !this.form.user_password
      ) {
        this.$toasted.error('Please input all data for signing up')
      } else {
        this.register(this.form)
          .then(result => {
            console.log(result)
            this.$toasted.show(result.data.msg)
            this.showModal()
          })
          .catch(error => {
            this.$toasted.error(error.data.msg)
          })
      }
    },
    onReset() {
      this.form = {
        user_email: '',
        user_password: '',
        user_number: ''
      }
    },
    showModal() {
      this.$refs['my-modal'].show()
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
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
#modal a:hover {
  text-decoration: none;
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
    height: 780px;
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
    height: 820px;
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
