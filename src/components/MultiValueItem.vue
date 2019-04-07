<script>
import { onLeftClick } from "../utils";
import DeleteIcon from "./icons/Delete";

export default {
  name: "vue-treeview--multi-value-item",
  inject: ["instance"],

  props: {
    node: {
      type: Object,
      required: true
    }
  },

  methods: {
    handleMouseDown: onLeftClick(function handleMouseDown() {
      const { instance, node } = this;

      // Deselect this node.
      instance.select(node);
    })
  },

  render() {
    const { instance, node } = this;
    const itemClass = {
      "vue-treeview__multi-value-item": true,
      "vue-treeview__multi-value-item-disabled": node.isDisabled,
      "vue-treeview__multi-value-item-new": node.isNew
    };
    const customValueLabelRenderer = instance.$scopedSlots["value-label"];
    const labelRenderer = customValueLabelRenderer
      ? customValueLabelRenderer({ node })
      : node.label;

    return (
      <div class="vue-treeview__multi-value-item-container">
        <div class={itemClass} onMousedown={this.handleMouseDown}>
          <span class="vue-treeview__multi-value-label">{labelRenderer}</span>
          <span class="vue-treeview__icon vue-treeview__value-remove">
            <DeleteIcon />
          </span>
        </div>
      </div>
    );
  }
};
</script>
