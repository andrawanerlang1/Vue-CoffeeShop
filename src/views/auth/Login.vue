<template>
  <div>
    <div>
      <LoginComponent />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '../../components/_base/footer'
import LoginComponent from '../../components/_base/LoginComponent'

export default {
  name: 'Login',
  components: {
    Footer,
    LoginComponent
  }
}
</script>
