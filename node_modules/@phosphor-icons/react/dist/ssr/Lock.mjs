var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      R.call(o, r) && m(e, r, o[r]);
  return e;
}, c = (e, o) => i(e, p(o));
import d, { forwardRef as k } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Lock.mjs";
const w = k((e, o) => /* @__PURE__ */ d.createElement(l, c(a({ ref: o }, e), { weights: n })));
w.displayName = "Lock";
export {
  w as Lock
};
