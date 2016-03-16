var Utils = {

  init: function() {
    var fp2 = new Fingerprint2();
    fp2.get(function(result) {
      document.getElementById("fp2").value = result;
      var oddResult = result.charCodeAt(result.length - 1) % 2 === 0;
      if(oddResult) {
        Utils.hide("even-survey");
        Utils.show("odd-survey");
      } else {
        Utils.hide("odd-survey");
        Utils.show("even-survey");
      }
      Utils.hide("preview");
      Utils.initValidation();
    });
  },

  initValidation: function() {
    var submitButton = document.getElementById("submitButton");
    if(submitButton) {
      submitButton.onclick = this.validate();
    }
  },

  validate: function() {
    alert("Validating!");
    return false;
  },

  toggle: function(id) {
    var div = document.getElementById(id);
    div.style.display = div.style.display == "none" ? "block" : "none";
  },

  toggleAll: function(className) {
    var divs = document.getElementsByClassName(className);
    for(var i = 0; i < divs.length; i++) {
      divs[i].style.display = divs[i].style.display == "none" ? "block" : "none";
    }
  },

  change: function(id, displayState) {
    var div = document.getElementById(id);
    div.style.display = displayState;
  },

  changeAll: function(className, displayState) {
    var divs = document.getElementsByClassName(className);
    for(var i = 0; i < divs.length; i++) {
      divs[i].style.display = displayState;
    }
  },

  show: function(id) {
    this.change(id, "block");
  },

  showAll: function(className) {
    this.changeAll(className, "block");
  },

  hide: function(id) {
    this.change(id, "none");
  },

  hideAll: function(className) {
    this.changeAll(className, "none");
  },

};

