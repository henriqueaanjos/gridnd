var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    l.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      S.call(o, e) && m(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/Stool.mjs";
const w = R((t, o) => /* @__PURE__ */ c.createElement(d, f(a({ ref: o }, t), { weights: n })));
w.displayName = "Stool";
export {
  w as Stool
};
