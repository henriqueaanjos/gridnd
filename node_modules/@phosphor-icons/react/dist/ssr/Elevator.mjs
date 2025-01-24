var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && a(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && a(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import E, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/Elevator.mjs";
const v = R((r, e) => /* @__PURE__ */ E.createElement(d, f(m({ ref: e }, r), { weights: n })));
v.displayName = "Elevator";
export {
  v as Elevator
};
