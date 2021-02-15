<template>
  <b-row class="mt-xl-4 mt-4">
    <b-col
      ><div>
        <b-card class="todays_income mb-3 mb-lg-4">
          <b-card-body class="p-xl-2 p-2">
            <div class="data_income mt-3">
              <h5>Today's Income</h5>
              <h2>Rp. {{ formatPrice(Days) }}</h2>
              <p>+5% Yesterday</p>
            </div>
          </b-card-body>
        </b-card>
      </div></b-col
    >
    <b-col
      ><div>
        <b-card class="orders_income mb-3 mb-lg-0">
          <b-card-body class="p-xl-2 p-2">
            <div class="data_income mt-3">
              <h5>Orders</h5>
              <h2>{{ formatPrice(TotalOrder) }}</h2>
              <p>+5% Last Week</p>
            </div>
          </b-card-body>
        </b-card>
      </div></b-col
    >
    <b-col
      ><div>
        <b-card class="year_income mb-3 mb-lg-0">
          <b-card-body class="p-xl-2 p-2">
            <div class="data_income mt-3">
              <h5>This Year's Income</h5>
              <h2>Rp. {{ formatPrice(Years) }}</h2>
              <p>+10% Last Year</p>
            </div>
          </b-card-body>
        </b-card>
      </div></b-col
    >
  </b-row>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      Days: "getSubtotalDays",
      TotalOrder: "getTotalOrder",
      Years: "getSubTotalYears",
    }),
  },
  created() {
    this.subTotaldays();
    this.TotalOrdermonth();
    this.subTotalYears();
  },
  methods: {
    ...mapActions(["subTotaldays", "TotalOrdermonth", "subTotalYears"]),
    formatPrice(value) {
      const val = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return val;
    },
  },
};
</script>
<style scoped>
.todays_income {
  background: linear-gradient(to right, rgb(247, 205, 205), rgb(250, 144, 144));
  border-radius: 10px;
  border: none;
  box-shadow: 6px 5px 10px rgb(252, 137, 137);
}
.orders_income {
  background: linear-gradient(to right, #cff3fa, #4fe0fd);
  border-radius: 10px;
  border: none;
  box-shadow: 6px 5px 10px #4fe0fd;
}
.year_income {
  background: linear-gradient(to right, #f5e8ff, #a179bf);
  border-radius: 10px;
  border: none;
  box-shadow: 6px 5px 10px #a179bf;
}
.data_income {
  font-family: "Poppins", sans-serif;
}
.data_income h5 {
  font-size: 14px;
  font-weight: 700;
}
.data_income h2 {
  font-size: 25px;
  white-space: nowrap;
  font-weight: 700;
}
.data_income p {
  font-size: 10px;
  font-weight: 700;
}
</style>
