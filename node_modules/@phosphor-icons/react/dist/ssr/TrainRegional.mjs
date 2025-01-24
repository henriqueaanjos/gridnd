var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var i = (r, e, a) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && i(r, a, e[a]);
  if (o)
    for (var a of o(e))
      R.call(e, a) && i(r, a, e[a]);
  return r;
}, m = (r, e) => f(r, p(e));
import l, { forwardRef as c } from "react";
import g from "../lib/SSRBase.mjs";
import d from "../defs/TrainRegional.mjs";
const w = c((r, e) => /* @__PURE__ */ l.createElement(g, m(t({ ref: e }, r), { weights: d })));
w.displayName = "TrainRegional";
export {
  w as TrainRegional
};
