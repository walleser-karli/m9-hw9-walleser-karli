"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Desserts = function Desserts(type, calories) {
  _classCallCheck(this, Desserts);

  this.type = type;
  this.calories = calories;
};

var IceCream = function (_Desserts) {
  _inherits(IceCream, _Desserts);

  function IceCream(type, calories, flavor, scoops) {
    _classCallCheck(this, IceCream);

    var _this = _possibleConstructorReturn(this, (IceCream.__proto__ || Object.getPrototypeOf(IceCream)).call(this, type, calories));

    _this.flavor = flavor;
    _this.scoops = scoops;
    return _this;
  }

  return IceCream;
}(Desserts);