<template>
  <div>
    <div>
      <SignupComponent />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '../../components/_base/footer'
import SignupComponent from '../../components/_base/SignupComponent'

export default {
  name: 'Signup',
  components: {
    Footer,
    SignupComponent
  }
}
</script>
