var i = Object.defineProperty, c = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && o(r, t, e[t]);
  if (a)
    for (var t of a(e))
      l.call(e, t) && o(r, t, e[t]);
  return r;
}, f = (r, e) => c(r, p(e));
import C, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/CaretCircleLeft.mjs";
const w = R((r, e) => /* @__PURE__ */ C.createElement(d, f(m({ ref: e }, r), { weights: n })));
w.displayName = "CaretCircleLeft";
export {
  w as CaretCircleLeft
};
