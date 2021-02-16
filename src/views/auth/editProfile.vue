<template>
  <div>
    <Navbar />
    <EditProfileComponent />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/_base/Navbar";
import Footer from "../../components/_base/footer";
import EditProfileComponent from "../../components/_base/EditProfileComponent";

export default {
  name: "EditProfile",
  components: {
    Navbar,
    EditProfileComponent,
    Footer,
  },
};
</script>
