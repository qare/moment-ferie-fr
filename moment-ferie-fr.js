// https://github.com/damienlabat/moment-ferie-fr
(function () {

  "use strict";

  var initialize = function (moment) {

    //**********

    // http://techneilogy.blogspot.fr/2012/02/couple-of-years-ago-i-posted-source.html

    moment.fn.easterDay = moment.fn.paques = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      var a = Y % 19;
      var b = Math.floor(Y / 100);
      var c = Y % 100;
      var d = Math.floor(b / 4);
      var e = b % 4;
      var f = Math.floor((b + 8) / 25);
      var g = Math.floor((b - f + 1) / 3);
      var h = (19 * a + b - d - g + 15) % 30;
      var i = Math.floor(c / 4);
      var k = c % 4;
      var l = (32 + 2 * e + 2 * i - h - k) % 7;
      var m = Math.floor((a + 11 * h + 22 * l) / 451);
      var n0 = (h + l + 7 * m + 114);
      var n = Math.floor(n0 / 31) - 1;
      var p = n0 % 31 + 1;
      var date = new Date(Y, n, p);
      return moment(date);
    };


    moment.fn.lundiDePaques = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return this.paques(Y).add(1, "days");
    };


    moment.fn.ascension = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return this.paques(Y).add(39, "days");
    };


    moment.fn.pentecote = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return this.paques(Y).add(50, "days");
    };

    //*****************


    moment.fn.jourDeLAn = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("1-1-" + Y, "DD-MM-YYYY");
    };

    moment.fn.feteDuTravail = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("1-5-" + Y, "DD-MM-YYYY");
    };

    moment.fn.victoireDeAllies = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("8-5-" + Y, "DD-MM-YYYY");
    };

    moment.fn.feteNationale = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("14-7-" + Y, "DD-MM-YYYY");
    };


    moment.fn.assomption = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("15-8-" + Y, "DD-MM-YYYY");
    };

    moment.fn.toussaint = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("1-11-" + Y, "DD-MM-YYYY");
    };

    moment.fn.armistice = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("11-11-" + Y, "DD-MM-YYYY");
    };

    moment.fn.noel = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("25-12-" + Y, "DD-MM-YYYY");
    };

    var listeFerie = {
      "Jour de l'an" : moment.fn.jourDeLAn,
      feteDuTravail: "Fête du travail",
      victoireDeAllies: "Victoire des alliés",
      feteNationale: "Fête Nationale",
      assomption: "Assomption",
      toussaint: "Toussaint",
      armistice: "Armistice",
      noel: "Noël",
      paques: "Pâques",
      lundiDePaques: "Lundi de Pâques",
      ascension: "Ascension",
      pentecote: "Pentecôte"
    };


    //*****************


    moment.fn.getFerieList = function () {
      var res = [];

      return res;
    };


    moment.fn.getFerie = function () {
      var f;
      for (var index in listeFerie) {
        f = {name: listeFerie[index], date: eval("this." + index + "()") };
        if (this.isSame(f.date)) {
          return f.name;
        }
      }

      return null;
    };


    moment.fn.isFerie = function () {
      var f;
      for (var index in listeFerie) {
        f = {name: listeFerie[index], date: eval("this." + index + "()") };
        if (this.isSame(f.date)) {
          return true;
        }
      }

      return false;
    };
    return moment;
  };

  if (typeof define === "function" && define.amd) {
    define("moment-ferie-fr", ["moment"], function (moment) {
      return this.moment = initialize(moment);
    });
  } else if (typeof module !== "undefined") {
    module.exports = initialize(require("moment"));
  } else if (typeof window !== "undefined" && window.moment) {
    this.moment = initialize(this.moment);
  }

}).call(this);