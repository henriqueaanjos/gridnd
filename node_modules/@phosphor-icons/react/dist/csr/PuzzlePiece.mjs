var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? c(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      l.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, p(e));
import z, { forwardRef as P } from "react";
import n from "../lib/IconBase.mjs";
import d from "../defs/PuzzlePiece.mjs";
const u = P((o, e) => /* @__PURE__ */ z.createElement(n, i(a({ ref: e }, o), { weights: d })));
u.displayName = "PuzzlePiece";
export {
  u as PuzzlePiece
};
