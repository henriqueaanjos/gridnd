var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && t(o, r, e[r]);
  if (i)
    for (var r of i(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, a = (o, e) => f(o, p(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import v from "../defs/Television.mjs";
const w = R((o, e) => /* @__PURE__ */ c.createElement(d, a(m({ ref: e }, o), { weights: v })));
w.displayName = "Television";
export {
  w as Television
};
