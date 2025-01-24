var s = Object.defineProperty, c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var a = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && a(o, r, e[r]);
  if (t)
    for (var r of t(e))
      p.call(e, r) && a(o, r, e[r]);
  return o;
}, i = (o, e) => c(o, l(e));
import n, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/TrolleySuitcase.mjs";
const w = y((o, e) => /* @__PURE__ */ n.createElement(d, i(m({ ref: e }, o), { weights: u })));
w.displayName = "TrolleySuitcase";
export {
  w as TrolleySuitcase
};
