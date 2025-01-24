var p = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var r = (t, e, a) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a, s = (t, e) => {
  for (var a in e || (e = {}))
    c.call(e, a) && r(t, a, e[a]);
  if (o)
    for (var a of o(e))
      n.call(e, a) && r(t, a, e[a]);
  return t;
}, m = (t, e) => f(t, i(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/CassetteTape.mjs";
const I = l((t, e) => /* @__PURE__ */ d.createElement(w, m(s({ ref: e }, t), { weights: C })));
I.displayName = "CassetteTape";
export {
  I as CassetteTape
};
