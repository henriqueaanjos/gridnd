var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && i(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && i(o, r, e[r]);
  return o;
}, m = (o, e) => f(o, p(e));
import l, { forwardRef as R } from "react";
import g from "../lib/IconBase.mjs";
import d from "../defs/TrainRegional.mjs";
const w = R((o, e) => /* @__PURE__ */ l.createElement(g, m(t({ ref: e }, o), { weights: d })));
w.displayName = "TrainRegional";
export {
  w as TrainRegional
};
