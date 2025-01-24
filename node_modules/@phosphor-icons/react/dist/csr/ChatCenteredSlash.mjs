var f = Object.defineProperty, h = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      p.call(e, r) && o(t, r, e[r]);
  return t;
}, s = (t, e) => h(t, i(e));
import c, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import C from "../defs/ChatCenteredSlash.mjs";
const w = d((t, e) => /* @__PURE__ */ c.createElement(l, s(m({ ref: e }, t), { weights: C })));
w.displayName = "ChatCenteredSlash";
export {
  w as ChatCenteredSlash
};
