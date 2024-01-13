import { defineComponent as d, toRefs as c, createVNode as r } from "vue";
const i = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  }
}, n = /* @__PURE__ */ d({
  name: "SButton",
  props: i,
  setup(t, {
    slots: e
  }) {
    const {
      type: o,
      size: s,
      disabled: l,
      block: a
    } = c(t), u = a.value ? "s-btn--block" : "";
    return () => r("button", {
      disabled: l.value,
      class: `s-btn s-btn--${o.value} s-btn--${s.value} ${u}`
    }, [e.default ? e.default() : "按钮"]);
  }
}), p = {
  install(t) {
    t.component(n.name, n);
  }
}, b = [p], m = {
  version: "0.1.1",
  install(t) {
    b.forEach((e) => t.use(e));
  }
};
export {
  n as Button,
  m as default
};
