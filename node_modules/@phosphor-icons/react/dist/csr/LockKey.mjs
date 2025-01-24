var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      n.call(e, r) && m(o, r, e[r]);
  return o;
}, c = (o, e) => i(o, p(e));
import y, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/LockKey.mjs";
const w = d((o, e) => /* @__PURE__ */ y.createElement(k, c(a({ ref: e }, o), { weights: l })));
w.displayName = "LockKey";
export {
  w as LockKey
};
