<script>
import treeselectMixin from "../mixins/treeselectMixin";
import HiddenFields from "./HiddenFields";
import Control from "./Control";
import Menu from "./Menu";
import MenuPortal from "./MenuPortal";

export default {
  name: "vue-treeview",
  mixins: [treeselectMixin],

  computed: {
    wrapperClass() {
      return {
        "vue-treeview": true,
        "vue-treeview--single": this.single,
        "vue-treeview--multi": this.multiple,
        "vue-treeview--searchable": this.searchable,
        "vue-treeview--disabled": this.disabled,
        "vue-treeview--focused": this.trigger.isFocused,
        "vue-treeview--has-value": this.hasValue,
        "vue-treeview--open": this.menu.isOpen,
        "vue-treeview--open-above": this.menu.placement === "top",
        "vue-treeview--open-below": this.menu.placement === "bottom",
        "vue-treeview--branch-nodes-disabled": this.disableBranchNodes,
        "vue-treeview--append-to-body": this.appendToBody
      };
    }
  },
  render() {
    return (
      <div ref="wrapper" class={this.wrapperClass}>
        <HiddenFields />
        {this.appendToBody ? <MenuPortal ref="portal" /> : <Menu ref="menu" />}
      </div>
    );
  }
};
</script>
