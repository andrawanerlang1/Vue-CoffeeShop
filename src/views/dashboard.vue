<template>
  <div class="Dashboard">
    <Navbar />
    <hr class="mt-lg-3 d-none d-lg-block" />
    <b-container>
      <card />
      <div class="mt-xl-4 mt-3 mb-xl-4 mb-4">
        <b-card class="chart_card">
          <Chart />
        </b-card>
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/_base/Navbar";
import Footer from "../components/_base/footer";
import card from "../components/_base/DashboardCard";
import Chart from "../components/_base/DashboardChart";
export default {
  name: "Dashboard",
  components: {
    Navbar,
    Footer,
    card,
    Chart,
  },
  data() {
    return {
      role: 1,
      MassageValue: 30,
    };
  },
};
</script>
<style scoped>
.chart_card {
  border-radius: 10px;
  box-shadow: 6px 6px 20px rgba(196, 196, 196, 0.67);
}
</style>
