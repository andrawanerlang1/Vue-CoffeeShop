<template>
  <div>
    <main class="container-fluid">
      <div class="top-main">
        <h1>Let’s see what you have bought!</h1>
        <h3>Select item to see its details</h3>
      </div>
      <div class="bot-main">
        <div class="box-main">
          <div
            class="box-main-item"
            v-for="(item, index) in history"
            :key="index"
            @click="showModal(item.history_id)"
          >
            <div class="box-main-left">
              <img src="../../assets/veg.png" alt="" />
            </div>
            <div class="box-main-right">
              <div class="name">{{ item.history_created_at.slice(0, 10) }}</div>
              <div class="price">
                Time : {{ item.history_created_at.slice(11, 19) }}
              </div>
              <div class="status">
                <div>IDR {{ item.history_subtotal }}.000</div>
              </div>
            </div>
          </div>
        </div>
        <b-modal ref="my-modal" hide-footer title="History Details">
          <div>
            <div id="historyWrap" style="font-weight: bold;margin-bottom:20px">
              <div>Product</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>
            <div
              id="contentWrap"
              v-for="(item, index) in historyDetail"
              :key="index"
              style="border-bottom:grey solid 1px"
            >
              <div>{{ item.product_name }}</div>
              <div>{{ item.history_detail_quantity }}</div>
              <div>{{ item.history_detail_total }}</div>
            </div>
          </div>
          <b-button
            @click="deleteHistory(activeId)"
            class="mt-3"
            variant="outline-danger"
            block
            >Delete History</b-button
          >
          <b-button
            class="mt-2"
            variant="outline-warning"
            block
            @click="hideModal"
            >Close</b-button
          >
        </b-modal>
      </div>
    </main>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "history",
  data() {
    return {
      activeId: null,
    };
  },
  mounted() {
    this.getHistoryAcc(this.user.user_id);
  },
  computed: {
    ...mapGetters({
      history: "getHistoryByUserId",
      user: "setUser",
      historyDetail: "getHistoryDetails",
    }),
  },
  methods: {
    ...mapGetters(["getHistoryByUserId", "getHistoryDetails", "setUser"]),
    ...mapActions(["getHistoryAcc", "getHistoryDetail", "deleteHistorys"]),

    deleteHistory(id) {
      this.deleteHistorys(id);
      this.$router.go();
    },
    showModal(history_id) {
      this.getHistoryDetail(history_id);
      this.activeId = history_id;
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
};
</script>

<style scoped>
main {
  background-image: url("../../assets/bg2.png");
  background-size: cover;
  background-repeat: no-repeat;
}
#historyWrap,
#contentWrap {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
#contentWrap div,
#historyWrap div {
  width: 200px;
}
main .top-main {
  text-align: center;
  padding-top: 100px;
}
.top-main h1,
.top-main h3 {
  font-family: Rubik;
  font-weight: bold;
  font-size: 40px;
  color: white;
  text-shadow: 2px 2px black;
}
.top-main h3 {
  font-size: 20px;
  padding-top: 20px;
}
main .bot-main {
  width: 95%;
  margin-left: 2.5%;
  margin-top: 20px;
  padding-bottom: 80px;
}
.bot-main button {
  background: none;
  border: none;
  color: white;
  text-align: right;
  text-decoration: underline;
  margin-left: 25px;
}
.bot-main .box-main {
  margin-top: 25px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  justify-content: space-between;
}
.box-main-item {
  background-color: white;
  margin-top: 10px;
  width: 350px;
  border-radius: 15px;
  height: 100px;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.59);
}
.box-main-item:hover {
  background-color: wheat;
  border: black solid 2px;
}
.box-main-left img {
  width: 85px;
  height: 85px;
  border-radius: 100%;
  margin-left: 5px;
  margin-top: 7px;
}
.box-main-right {
  margin-left: 35px;
}
.box-main-right .name {
  font-family: Poppins;
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;
}
.box-main-right .price,
.box-main-right .status {
  font-family: Poppins;
  font-size: 20px;
  line-height: 30px;
  color: #895537;
}
.status {
  display: flex;
}
.status input {
  margin-left: 230px;
  -webkit-transform: scale(2);
  transform: scale(2);
}

@media (max-width: 480px) {
  .bot-main .box-main {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  .box-main-item {
    width: 300px;
  }
  .box-main-left img {
    width: 65px;
    height: 65px;
    margin-left: 10px;
    margin-top: 12px;
  }
  .box-main-right {
    flex: 3;
    margin-left: 15px;
  }
  .box-main-right .name {
    font-size: 20px;
    line-height: 35px;
  }
  .box-main-right .price,
  .box-main-right .status {
    font-size: 15px;
    line-height: 30px;
  }
  .status input {
    margin-left: 180px;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@media (max-width: 375px) {
  .box-main-item {
    width: 225px;
  }
  .box-main-item input {
    display: none;
  }
  .box-main-item div {
    font-size: 12px;
    line-height: 10px;
  }
}
</style>
