<template>
  <div>
    <div>
      <ResetPassword />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../../components/_base/footer";
import ResetPassword from "../../components/_base/ResetPassword";

export default {
  name: "Login",
  components: {
    Footer,
    ResetPassword,
  },
};
</script>
