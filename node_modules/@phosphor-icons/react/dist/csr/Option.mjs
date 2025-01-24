var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? p(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && m(t, e, o[e]);
  return t;
}, i = (t, o) => f(t, n(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Option.mjs";
const O = l((t, o) => /* @__PURE__ */ d.createElement(w, i(a({ ref: o }, t), { weights: I })));
O.displayName = "Option";
export {
  O as Option
};
