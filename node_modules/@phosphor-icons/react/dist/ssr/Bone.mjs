var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Bone.mjs";
const w = R((o, e) => /* @__PURE__ */ B.createElement(d, f(a({ ref: e }, o), { weights: l })));
w.displayName = "Bone";
export {
  w as Bone
};
