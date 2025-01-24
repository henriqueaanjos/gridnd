var i = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var s = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, t = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && s(o, r, e[r]);
  if (a)
    for (var r of a(e))
      p.call(e, r) && s(o, r, e[r]);
  return o;
}, m = (o, e) => f(o, h(e));
import c, { forwardRef as l } from "react";
import P from "../lib/IconBase.mjs";
import d from "../defs/PushPinSlash.mjs";
const u = l((o, e) => /* @__PURE__ */ c.createElement(P, m(t({ ref: e }, o), { weights: d })));
u.displayName = "PushPinSlash";
export {
  u as PushPinSlash
};
