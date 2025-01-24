var s = Object.defineProperty, c = Object.defineProperties;
var d = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      f.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => c(o, d(e));
import p, { forwardRef as M } from "react";
import n from "../lib/IconBase.mjs";
import k from "../defs/MouseMiddleClick.mjs";
const u = M((o, e) => /* @__PURE__ */ p.createElement(n, a(m({ ref: e }, o), { weights: k })));
u.displayName = "MouseMiddleClick";
export {
  u as MouseMiddleClick
};
