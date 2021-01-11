<template>
  <div class="main">
    <div class="textmain">User Profile</div>
    <div class="containermain">
      <div class="kiri">
        <div class="profpic">
          <img src="../../assets/prof.png" alt="" />
          <h2>{{ user.user_display_name }}</h2>
          <h4>{{ user.user_email }}</h4>
        </div>
        <div class="photo">
          <button type="button" class="choose">Choose Photo</button>
          <button type="button" class="remove">Remove Photo</button>
        </div>
        <button type="button" class="password" @click="showModal">
          Edit Password
        </button>
        <b-modal ref="my-modal" hide-footer title="Input New Password">
          <b-form-input
            type="text"
            placeholder="Input your new password"
          ></b-form-input>
          <b-button class="mt-3" variant="outline-danger" block
            >Confirm new password</b-button
          >
          <b-button
            class="mt-2"
            variant="outline-warning"
            block
            @click="hideModal"
            >Cancel</b-button
          >
        </b-modal>
        <div class="change">
          <div class="text">Do you want to save the change?</div>
          <button @click="updateUser" type="button" class="savechange">
            Save Change
          </button>
          <button @click="getUserById" type="button" class="cancel">
            Cancel
          </button>
        </div>
        <div class="logout">
          <button type="button">Log Out</button>
        </div>
      </div>
      <div class="kanan">
        <!-- <div class="sunting">
          <img src="../../assets/sunting.png" alt="" />
        </div> -->
        <div class="kontak">
          <div class="judul">Contact</div>
          <div class="isi">
            <div class="isikiri">
              <div class="email">
                Email Address :
                <div>
                  <b-form-input
                    type="text"
                    v-model="user.user_email"
                    placeholder="your email address"
                  ></b-form-input>
                </div>
              </div>
              <div class="address">
                Delivery Address :
                <div>
                  <b-form-textarea
                    rows="3"
                    v-model="user.user_address"
                    placeholder="Input delivery address.."
                  ></b-form-textarea>
                </div>
              </div>
            </div>
            <div class="isikanan">
              <div class="number">
                Mobile Phone Number :
                <div>
                  <b-form-input
                    type="text"
                    v-model="user.user_number"
                    placeholder="Input phone number"
                  ></b-form-input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="kontak">
          <div class="judul">Details</div>
          <div class="isi">
            <div class="isikiri">
              <div class="email">
                Display Name :
                <div>
                  <b-form-input
                    type="text"
                    v-model="user.user_display_name"
                    placeholder="your name here.."
                  ></b-form-input>
                </div>
              </div>
              <div class="address">
                First Name :
                <div>
                  <b-form-input
                    type="text"
                    v-model="user.user_first_name"
                    placeholder="your first name .."
                  ></b-form-input>
                </div>
              </div>
              <div class="address">
                Last Name :
                <div>
                  <b-form-input
                    type="text"
                    v-model="user.user_last_name"
                    placeholder="your last name .."
                  ></b-form-input>
                </div>
              </div>
            </div>
            <div class="isikanan">
              <div class="number">
                Birthday
                <div>
                  <b-form-datepicker
                    rows="3"
                    v-model="user.user_birthday"
                    placeholder="your birthday date"
                    reset-button
                    close-button
                  ></b-form-datepicker>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gender">
          <form>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                class="custom-control-input"
                id="customRadio"
                value="male"
                v-model="user.user_gender"
              />
              <label class="custom-control-label" for="customRadio">Male</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                class="custom-control-input"
                id="customRadio2"
                value="female"
                v-model="user.user_gender"
              />
              <label class="custom-control-label" for="customRadio2"
                >Female</label
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import toastMixins from '../../mixins/toastMixins'

export default {
  data() {
    return {}
  },
  mixins: [toastMixins],
  mounted() {
    this.getUserById()
  },
  computed: {
    ...mapGetters({
      user: 'setUser'
    })
  },
  methods: {
    ...mapGetters(['setUser']),
    ...mapActions(['getUserByIds', 'updateUsers']),
    getUserById() {
      this.getUserByIds(this.user.user_id)
    },
    updateUser() {
      this.updateUsers(this.user)
      this.toastMixins('Profile Updated', 'success', 'Success!!')
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');
.main {
  background-image: url('../../assets/bg3.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 100px;
}
.textmain {
  width: 90%;
  margin-left: 5%;
  padding-top: 60px;
  font-family: Rubik;
  font-weight: 500;
  font-size: 35px;
  line-height: 50px;
  color: white;
  text-shadow: black 2px 2px;
}
.containermain {
  background-color: #f8f8f8;
  border-radius: 15px;
  width: 90%;
  padding: 0.5%;
  padding-bottom: 2%;
  margin-left: 5%;
  display: flex;
  flex-direction: row;
}
.containermain .kiri {
  width: 400px;
  margin-bottom: 10px;
}
.kiri .profpic img {
  border-radius: 100%;
  margin-left: 30%;
  margin-top: 10%;
  width: 40%;
}
.kiri .profpic h2 {
  font-family: Rubik;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
}
.kiri .profpic h4 {
  font-family: Rubik;
  font-size: 15px;
  line-height: 0px;
  text-align: center;
}
.kiri .photo .choose,
.kiri .photo .remove,
.kiri .password,
.kiri .logout button {
  width: 70%;
  margin-top: 30px;
  margin-left: 15%;
  background-color: #ffba33;
  color: #6a4029;
  border-radius: 15px;
  height: 35px;
  font-family: Poppins;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
}
.kiri .photo .remove {
  margin-top: 10px;
  background-color: #6a4029;
  color: white;
}
.kiri .password,
.kiri .logout button {
  background-color: white;
  height: 44px;
}
.kiri .change {
  width: 70%;
  margin-top: 30px;
  margin-left: 15%;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #6a4029;
}
.kiri .change button {
  width: 100%;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  border-radius: 15px;
  height: 44px;
  background-color: #6a4029;
  color: white;
  margin-top: 10px;
}
.kiri button.cancel {
  background-color: #ffba33;
  color: #6a4029;
}
.containermain .kanan {
  flex: 1;
  position: relative;
  background-color: white;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.59);
  margin-bottom: 10px;
  margin-top: 35px;
  margin-right: 2%;
  border-radius: 15px;
  padding-left: 2%;
  padding-top: 20px;
}
.kanan .sunting {
  position: absolute;
  right: 10px;
  background-color: #6a4029;
  width: 37px;
  height: 37px;
  padding: 6px;
  border-radius: 100%;
}
.kanan .kontak .judul {
  font-family: Poppins;
  font-weight: bold;
  font-size: 30px;
  color: #4f5665;
}
.kanan .kontak .isi {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.isikiri {
  flex: 3;
}
.isikanan {
  flex: 2;
}
.isikiri .email,
.isikiri .address,
.isikanan .number {
  font-family: Poppins;
  font-weight: 500;
  font-size: 17px;
  color: #9f9f9f;
  border-bottom: black 2px solid;
  margin-right: 15%;
  margin-bottom: 30px;
}
.isikiri .email div,
.isikiri .address div,
.isikanan .number div {
  font-size: 17px;
  color: black;
  margin-bottom: 4px;
}
.gender {
  margin-left: 30%;
}
.gender .custom-control.custom-radio.custom-control-inline {
  margin-right: 20%;
  font-family: Poppins;
  font-weight: 700;
  font-size: 17px;
  color: #6a4029;
}

@media (max-width: 1100px) {
  .kanan .kontak .isi {
    flex-direction: column;
  }
}
@media (max-width: 820px) {
  .containermain {
    flex-direction: column;
  }
  .containermain .kiri {
    margin-left: auto;
    margin-right: auto;
  }
  .containermain .kanan {
    margin-left: 2%;
  }
}
@media (max-width: 450px) {
  .containermain {
    flex-direction: column;
  }
  .containermain .kiri {
    width: 300px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
  }
  .containermain .kanan {
    margin-left: 2%;
  }
}
</style>
