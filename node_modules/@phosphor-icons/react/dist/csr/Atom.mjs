var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var r = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && r(t, e, o[e]);
  if (m)
    for (var e of m(o))
      n.call(o, e) && r(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import A from "../defs/Atom.mjs";
const I = l((t, o) => /* @__PURE__ */ d.createElement(w, f(a({ ref: o }, t), { weights: A })));
I.displayName = "Atom";
export {
  I as Atom
};
