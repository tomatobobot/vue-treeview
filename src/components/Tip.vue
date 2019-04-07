<script>
export default {
  name: "vue-treeview--tip",
  functional: true,

  props: {
    type: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },

  render(_, context) {
    const { props, children } = context;

    return (
      <div class={`vue-treeview__tip vue-treeview__${props.type}-tip`}>
        <div class="vue-treeview__icon-container">
          <span class={`vue-treeview__icon-${props.icon}`} />
        </div>
        <span
          class={`vue-treeview__tip-text vue-treeview__${props.type}-tip-text`}
        >
          {children}
        </span>
      </div>
    );
  }
};
</script>
