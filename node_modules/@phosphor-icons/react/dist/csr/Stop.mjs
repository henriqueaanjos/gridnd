var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      n.call(o, e) && m(t, e, o[e]);
  return t;
}, p = (t, o) => i(t, s(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Stop.mjs";
const R = l((t, o) => /* @__PURE__ */ d.createElement(w, p(a({ ref: o }, t), { weights: I })));
R.displayName = "Stop";
export {
  R as Stop
};
