import MessageConstructor from "./Index.vue";
import { createVNode, render } from "vue";

const instances = [];
let index = 1;

const Message = (options) => {
  if (typeof options === "string") {
    options = {
      message: options,
    };
  }

  const id = `message_${index++}`;

  let verticalOffset = options.offset || 41;
  verticalOffset += instances.length * (41 + 8);
  options = {
    ...options,
    id,
    offset: verticalOffset,
    onClose: () => {
      close(id);
    },
  };

  const container = document.createElement("div");
  container.className = `container_${id}`;
  const vm = createVNode(MessageConstructor, options);
  render(vm, container);
  instances.push({ vm });
  document.body.appendChild(container.firstElementChild);
};

export const close = (id) => {
  const idx = instances.findIndex(({ vm }) => {
    return vm.component.props.id === id;
  });
  if (idx === -1) {
    return;
  }
  const { vm } = instances[idx];
  if (!vm) {
    return;
  }
  const removeHeight = vm.el.offsetHeight;
  instances.splice(idx, 1);
  const node = document.querySelector(".rapid-message");
  if (node.style.display === "none") {
    document.body.removeChild(node);
  }
  if (instances.length < 1) {
    return;
  }
  instances.forEach((item) => {
    item.vm.component.props.offset =
      parseInt(item.vm.el.style["top"], 10) - removeHeight - 8;
  });
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
