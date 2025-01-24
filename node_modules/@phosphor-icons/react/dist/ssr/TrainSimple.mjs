var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (r, e, m) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : r[e] = m, o = (r, e) => {
  for (var m in e || (e = {}))
    l.call(e, m) && i(r, m, e[m]);
  if (a)
    for (var m of a(e))
      n.call(e, m) && i(r, m, e[m]);
  return r;
}, t = (r, e) => f(r, s(e));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/TrainSimple.mjs";
const w = c((r, e) => /* @__PURE__ */ S.createElement(R, t(o({ ref: e }, r), { weights: d })));
w.displayName = "TrainSimple";
export {
  w as TrainSimple
};
