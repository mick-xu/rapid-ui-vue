<template>
  <div :class="wrapClasses">
    <table :class="classes">
      <thead class="table-thead">
        <slot name="header">
          <tr>
            <th v-for="item in cloumns" :key="item.key">{{ item.title }}</th>
          </tr>
        </slot>
      </thead>
      <tfoot class="table-tfoot">
        <slot name="footer">
          <tr></tr>
        </slot>
      </tfoot>
      <tbody class="table-tbody">
        <slot>
          <tr v-for="row in data" :key="row.id">
            <td v-for="(value, key) in row" :key="key">{{ value }}</td>
          </tr>
        </slot>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
export default {
  name: "Table",
  props: {
    bordered: { type: Boolean, default: false },
    className: { type: String, default: "" },
    cloumns: { type: Array, default: () => [] },
    data: { type: Array, default: () => [] },
    size: {
      type: String,
      default: "default",
      validator: (val) => {
        return ["default", "middle", "small"].includes(val);
      },
    },
    stripe: { type: Boolean, default: false },
  },
  setup(props) {
    const wrapClasses = computed(() => {
      return ["table-wrap", { ["table-bordered"]: props.bordered }, props.className];
    });
    const classes = computed(() => {
      return ["table", `table-${props.size}`, { ["table-striped"]: props.stripe }];
    });
    onMounted(() => {});
    return { wrapClasses, classes };
  },
};
</script>

<style lang="less" scoped></style>
