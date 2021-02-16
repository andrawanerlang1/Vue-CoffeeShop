<template>
  <div id="main">
    <b-container fluid>
      <b-row>
        <b-col xl="4" md="6" id="left">
          <div id="circle">
            <img v-if="!form.coupon_image" src="@/assets/photoGrey.png" />
            <img
              id="imageUploads"
              class="imgUpload"
              v-if="form.coupon_image && !url"
              :src="`http://${URLS}/coupon/` + form.coupon_image"
            />
            <img id="imageUpload" class="imgUpload" v-if="url" :src="url" />
            <input
              id="formInputImage"
              type="file"
              accept="image/x-png,image/jpg,image/jpeg"
              @change="handleFile"
              hidden
            />
          </div>
          <div id="top">
            <b-button block size="lg" variant="dark">Take A Picture</b-button>
            <br />
            <b-button @click="chooseFile()" block size="lg" variant="warning"
              >Choose from Gallery</b-button
            >
            <div id="delivery">
              <b>Expire Date : </b><br />
              <br />
              <div>
                <label for="example-datepicker">Start Date </label>
                <b-form-datepicker
                  id="date1"
                  v-model="form.start_date"
                  class="mb-2"
                ></b-form-datepicker>
              </div>
              <br />
              <div>
                <label for="example-datepicker">End Date </label>
                <b-form-datepicker
                  id="date2"
                  v-model="form.end_date"
                  class="mb-2"
                ></b-form-datepicker>
              </div>
            </div>
            <br />
            <div id="stock">
              <b>Input Coupon Discount (in percent) </b><br />
              <br />
              <input
                type="number"
                min="1"
                max="99"
                v-model="form.coupon_discount"
                class="form-control"
                placeholder="Coupon Discount %"
              />
            </div>
            <br />
            <div id="stock">
              <b>Input Coupon Code : </b><br />
              <br />
              <input
                type="text"
                v-model="form.coupon_code"
                class="form-control"
                placeholder="Coupon Code"
              />
            </div>
          </div>
        </b-col>
        <b-col xl="8" md="6" id="right">
          <div id="input1">
            <div><b>Name : </b></div>
            <br />
            <b-form-input
              type="text"
              v-model="form.coupon_name"
              placeholder="Type Coupon name max. 50 characters"
            ></b-form-input>
            <br />
            <div><b>Price :</b></div>
            <br />
            <b-form-input
              type="number"
              min="0"
              v-model="form.coupon_price"
              placeholder="Type the price"
            ></b-form-input>
            <br />
            <div><b>Description :</b></div>
            <br />
            <b-form-input
              type="text"
              v-model="form.coupon_desc"
              placeholder="Describe the coupon"
            ></b-form-input>
          </div>
          <br />
          <div id="input3">
            <b> Input Product Size : </b>
            <p>Click size you want to use for this product</p>
            <button
              v-on:click="form.size_id = 1"
              v-bind:class="this.form.size_id == 1 ? 'yellow' : 'normal'"
            >
              R
            </button>
            <button
              v-on:click="form.size_id = 1"
              v-bind:class="this.form.size_id == 1 ? 'yellow' : 'normal'"
            >
              L
            </button>
            <button
              v-on:click="form.size_id = 1"
              v-bind:class="this.form.size_id == 1 ? 'yellow' : 'normal'"
            >
              XL
            </button>
            <button
              v-on:click="form.size_id = 2"
              v-bind:class="this.form.size_id == 2 ? 'yellow' : 'normal'"
            >
              250 gr
            </button>
            <button
              v-on:click="form.size_id = 2"
              v-bind:class="this.form.size_id == 2 ? 'yellow' : 'normal'"
            >
              300 gr
            </button>
            <button
              v-on:click="form.size_id = 2"
              v-bind:class="this.form.size_id == 2 ? 'yellow' : 'normal'"
            >
              500gr
            </button>
          </div>
          <br />
          <div id="input4">
            <b> Input Delivery Method : </b>
            <p>Click methods you want to use for this product</p>
            <button
              v-on:click="deliver(1)"
              v-bind:class="this.home == 1 ? 'yellow' : 'normal'"
            >
              Home Delivery
            </button>
            <button
              v-on:click="deliver(2)"
              v-bind:class="this.dine == 1 ? 'yellow' : 'normal'"
            >
              Dine In
            </button>
            <button
              v-on:click="deliver(3)"
              v-bind:class="this.take == 1 ? 'yellow' : 'normal'"
            >
              Take Away
            </button>
          </div>

          <b-form id="input5" @submit.prevent="updateCoupon">
            <button type="submit" id="buttonSave">
              Update Coupon
            </button>
            <br />
            <br />
            <router-link to="/product">
              <button id="buttonCancel">Cancel</button>
            </router-link>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import toastMixins from "../../mixins/toastMixins";

export default {
  data() {
    return {
      coupon_id: "",
      url: null,
      URLS: process.env.VUE_APP_URL,
    };
  },
  mixins: [toastMixins],
  computed: {
    ...mapGetters({
      coupon: "getDataCouponById",
      form: "getFormIdCoupon",
      home: "getHomeCoupon",
      dine: "getDineCoupon",
      take: "getTakeCoupon",
    }),
  },
  created() {
    this.coupon_id = this.$route.params.id;
    this.getCouponById();
  },
  methods: {
    ...mapActions(["getCouponsById", "updateCoupons", "delivers"]),
    ...mapGetters([
      "getDataCouponById",
      "getFormIdCoupon",
      "getHomeCoupon",
      "getDineCoupon",
      "getTakeCoupon",
    ]),

    chooseFile() {
      document.getElementById("formInputImage").click();
    },
    handleFile(event) {
      this.form.coupon_image = event.target.files[0];
      this.url = URL.createObjectURL(
        (this.form.coupon_image = event.target.files[0])
      );
      const type = event.target.files[0].type;
      if (type != "image/jpeg" && type != "image/png" && type != "image/jpg") {
        this.toastMixins("Image must be jpeg / png", "danger", "attention!!");
      }
    },
    getCouponById() {
      this.getCouponsById(this.coupon_id);
    },
    updateCoupon() {
      const discount = parseInt(this.form.coupon_discount);
      if (
        !this.form.coupon_name ||
        !this.form.start_date ||
        !this.form.end_date ||
        !this.form.coupon_price ||
        !this.form.coupon_code ||
        !this.form.coupon_discount ||
        !this.form.deliver_id ||
        !this.form.coupon_image
      ) {
        return this.toastMixins(
          "Please input all data",
          "warning",
          "Warning!!"
        );
      } else if (discount > 99) {
        this.toastMixins(
          "Coupon discount (%) cant exceed 99%",
          "warning",
          "Warning!!"
        );
      } else {
        const param = { form: this.form, id: this.coupon_id };
        this.updateCoupons(param);
        this.toastMixins("Coupon Updated", "success", "Success!!");
        this.$router.go();
      }
    },
    deliver(param) {
      this.delivers(param);
      this.calculateDeliver();
    },
    calculateDeliver() {
      if (this.take && this.dine && this.home) {
        this.form.deliver_id = 7;
      } else if (this.take && this.dine) {
        this.form.deliver_id = 6;
      } else if (this.take && this.home) {
        this.form.deliver_id = 5;
      } else if (this.home && this.dine) {
        this.form.deliver_id = 4;
      } else if (this.take) {
        this.form.deliver_id = 3;
      } else if (this.dine) {
        this.form.deliver_id = 2;
      } else if (this.home) {
        this.form.deliver_id = 1;
      } else {
        this.form.deliver_id = 0;
      }
    },
  },
};
</script>

<style scoped>
#left {
  margin-bottom: 30px;
}
#main {
  font-family: "Rubik";
}
#right {
  width: 80%;
}
#input1 {
  width: 90%;
  margin-top: 35px;
}
#top {
  width: 250px;
  margin-left: auto;
  margin-right: auto;
}
#top b-button {
  height: 50px;
  background-color: red;
}
#circle {
  background-color: rgba(186, 186, 186, 0.35);
  border-radius: 100%;
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 20px;
}
#circle img {
  width: 100px;
  margin-left: 50px;
  margin-top: 50px;
}
#delivery {
  margin-top: 40px;
}
option {
  color: red;
}
#input3 p {
  color: grey;
}
#input3 button {
  border-radius: 100%;
  width: 100px;
  height: 100px;
  margin-left: 10px;
}
#input4 p {
  color: grey;
}
#input4 button {
  border-radius: 15px;
  width: 150px;
  height: 70px;
  margin-left: 20px;
}
#input5 {
  margin-top: 30px;
  margin-bottom: 20px;
}
#input5 button {
  width: 90%;
  height: 100px;
  border-radius: 20px;
}
#input5 #buttonSave {
  background-color: #6a4029;
  color: white;
  font-weight: bold;
  font-size: 25px;
}
#input5 #buttonCancel {
  font-weight: bold;
  font-size: 25px;
}
.yellow {
  background-color: #ffba33;
}
</style>
