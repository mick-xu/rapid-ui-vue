import MessageConstructor from "./Index.vue";
import { createVNode, render } from "vue";
const Message = (options) => {
  let id = 1;
  const container = document.createElement("div");
  container.className = `container_message_${id++}`;
  const vm = createVNode(MessageConstructor, options);
  render(vm, container);
  document.body.appendChild(container.firstElementChild);
};

["success", "warning", "info", "error"].forEach((type) => {
  Message[type] = (options) => {
    if (typeof options === "string") {
      options = {
        message: options,
        type,
      };
    } else {
      options.type = type;
    }
    return Message(options);
  };
});

export default Message;
