var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      R.call(e, o) && m(r, o, e[o]);
  return r;
}, c = (r, e) => i(r, p(e));
import l, { forwardRef as y } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/Recycle.mjs";
const w = y((r, e) => /* @__PURE__ */ l.createElement(d, c(a({ ref: e }, r), { weights: n })));
w.displayName = "Recycle";
export {
  w as Recycle
};
