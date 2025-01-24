var s = Object.defineProperty, d = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      f.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => d(o, l(e));
import p, { forwardRef as M } from "react";
import R from "../lib/SSRBase.mjs";
import k from "../defs/MouseMiddleClick.mjs";
const n = M((o, e) => /* @__PURE__ */ p.createElement(R, a(m({ ref: e }, o), { weights: k })));
n.displayName = "MouseMiddleClick";
export {
  n as MouseMiddleClick
};
