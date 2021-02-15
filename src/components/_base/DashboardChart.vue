<script>
// import { Line } from "vue-chartjs";

export default {
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "This Month",
            data: [2, 10, 5, 9, 0, 6, 20],
            backgroundColor: "transparent",
            borderColor: "#68E5F9",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
          {
            label: "Last Month",
            data: [20, 30, 10, 1, 40, 60, 20],
            backgroundColor: "transparent",
            borderColor: "#F9A4A4",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          position: "top",
          fontSize: 20,
          display: true,
          padding: 20,
          text: "Revenue",
        },
        animation: {
          duration: 2000,
          easing: "easeInOutBounce",
        },
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 8,
            padding: 20,
            fontSize: 15,
            fontStyle: "bold",
            usePointStyle: true,
            fontFamily: "Poppins",
          },
        },
      }
    );
  },
};
</script>
