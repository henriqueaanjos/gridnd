var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, l) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : o[e] = l, t = (o, e) => {
  for (var l in e || (e = {}))
    s.call(e, l) && a(o, l, e[l]);
  if (r)
    for (var l of r(e))
      c.call(e, l) && a(o, l, e[l]);
  return o;
}, m = (o, e) => i(o, p(e));
import n, { forwardRef as y } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/Volleyball.mjs";
const w = y((o, e) => /* @__PURE__ */ n.createElement(b, m(t({ ref: e }, o), { weights: d })));
w.displayName = "Volleyball";
export {
  w as Volleyball
};
