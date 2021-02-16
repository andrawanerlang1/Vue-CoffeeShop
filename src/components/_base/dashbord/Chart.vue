<script>
import { Line } from "vue-chartjs";
import { mapActions, mapGetters } from "vuex";

export default {
  created() {
    this.getMonthReport();
  },
  computed: {
    ...mapGetters({
      monthReport: "getMonthReport",
    }),
  },
  methods: {
    ...mapActions(["getMonthReport"]),
  },
  extends: Line,
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
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "2021",
            backgroundColor: "transparent",
            borderColor: "#abe0ed",
            data: this.monthReport,
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
      }
    );
  },
};
</script>
