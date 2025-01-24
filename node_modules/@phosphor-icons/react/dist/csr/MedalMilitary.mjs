var l = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, i = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (t)
    for (var a of t(e))
      c.call(e, a) && o(r, a, e[a]);
  return r;
}, m = (r, e) => f(r, p(e));
import d, { forwardRef as M } from "react";
import n from "../lib/IconBase.mjs";
import y from "../defs/MedalMilitary.mjs";
const w = M((r, e) => /* @__PURE__ */ d.createElement(n, m(i({ ref: e }, r), { weights: y })));
w.displayName = "MedalMilitary";
export {
  w as MedalMilitary
};
