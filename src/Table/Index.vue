<template>
  <div class="table-wrap">
    <table :class="classes">
      <thead class="table-thead">
        <slot name="header">
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>手机号</th>
            <th>地址</th>
          </tr>
        </slot>
      </thead>
      <tfoot class="table-tfoot">
        <slot name="footer">
          <tr>
            <td></td>
          </tr>
        </slot>
      </tfoot>
      <tbody class="table-tbody">
        <slot>
          <tr>
            <td>1</td>
            <td>王小虎</td>
            <td>15063358031</td>
            <td>济南高新区舜华路街道</td>
          </tr>
          <tr>
            <td>1</td>
            <td>王小虎</td>
            <td>15063358031</td>
            <td>济南高新区舜华路街道</td>
          </tr>
          <tr>
            <td>1</td>
            <td>王小虎</td>
            <td>15063358031</td>
            <td>济南高新区舜华路街道</td>
          </tr>
        </slot>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "Table",
  props: {
    bordered: { type: Boolean, default: false },
    className: { type: String, default: "" },
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
    const classes = computed(() => {
      return ["table", `table-${props.size}`];
    });
    return { classes };
  },
};
</script>

<style lang="less" scoped></style>
