export default {
  methods: {
    toastMixins(text, variant, title) {
      this.$bvToast.toast(`${text}`, {
        title: title,
        toaster: 'b-toaster-top-full',
        solid: true,
        variant: variant,
        appendToast: false,
        noAutoHide: true
      })
    }
  }
}
