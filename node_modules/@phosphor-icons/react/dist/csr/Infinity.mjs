var n = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (t, e, i) => e in t ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, a = (t, e) => {
  for (var i in e || (e = {}))
    c.call(e, i) && r(t, i, e[i]);
  if (o)
    for (var i of o(e))
      p.call(e, i) && r(t, i, e[i]);
  return t;
}, m = (t, e) => f(t, s(e));
import I, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Infinity.mjs";
const w = y((t, e) => /* @__PURE__ */ I.createElement(d, m(a({ ref: e }, t), { weights: l })));
w.displayName = "Infinity";
export {
  w as Infinity,
  w as Lemniscate
};
