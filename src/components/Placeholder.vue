<script>
export default {
  name: "vue-treeview--placeholder",
  inject: ["instance"],

  render() {
    const { instance } = this;
    const placeholderClass = {
      "vue-treeview__placeholder": true,
      "vue-treeview-helper-zoom-effect-off": true,
      "vue-treeview-helper-hide":
        instance.hasValue || instance.trigger.searchQuery
    };

    return <div class={placeholderClass}>{instance.placeholder}</div>;
  }
};
</script>
