<template>
  <div>
    <Navbar />
    <div class="main">
      <b-container class="dashboard-container">
        <div class="text-center mb-5">
          <h2 class="header-text">See how your store progress so far</h2>
        </div>
        <b-row class="mb-5">
          <b-col col lg="4" cols="12" class="dashboard-Income">
            <Income
              :data="today"
              :income="todayIncome.data[0].total_income * 1000"
            />
          </b-col>
          <b-col col lg="4" cols="12" class="dashboard-Income">
            <Income
              :data="week"
              :income="weekOrders.data[0].total_income * 1000"
            />
          </b-col>
          <b-col col lg="4" cols="12" class="dashboard-Income">
            <Income
              :data="year"
              :income="yearIncome.data[0].total_income * 1000"
            />
          </b-col>
        </b-row>
        <Chart class="mb-5" />
        <Button class="mb-5" />
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "../components/_base/Navbar";
import Footer from "../components/_base/footer";
import Income from "../components/_base/dashbord/Card";
import Chart from "../components/_base/dashbord/Chart";
import Button from "../components/_base/dashbord/Button";

export default {
  components: {
    Navbar,
    Footer,
    Income,
    Chart,
    Button,
  },
  computed: {
    ...mapGetters({
      yearIncome: "getYearIncome",
      weekOrders: "getWeekOrders",
      todayIncome: "getTodayIncome",
      monthReport: "getMonthReport",
    }),
  },
  methods: {
    ...mapActions(["getYearIncome", "getWeekOrders", "getTodayIncome"]),
  },
  created() {
    this.getYearIncome();
    this.getWeekOrders();
    this.getTodayIncome();
  },
  data() {
    return {
      today: {
        title: "Today Income",
        currency: "Rp",
        style: "background-color: #ffcb65",
      },
      week: {
        title: "This Week Income",
        currency: "Rp",
        style: "background-color: #ffcb65",
      },
      year: {
        title: "This Year Income",
        currency: "Rp",
        style: "background-color: #ffcb65",
      },
    };
  },
};
</script>

<style scoped>
.main {
  background-image: url("../assets/bg1.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0;
}

.dashboard-container {
  background-color: rgba(255, 255, 255, 0.93);
  border-radius: 10px;
  padding: 20px 30px 1px;
  -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
}

.header-text {
  color: #6a4029;
  font-weight: 700;
}

@media (max-width: 991px) {
  .dashboard-Income {
    margin-top: 20px;
  }
}

@media (max-width: 576px) {
  .dashboard-container {
    padding: 20px 20px 1px;
  }
}
</style>
