var basicCard = require("./basic.js");

var ClozeCard = function(fullText, cloze, partial) {
  this.fullText = fullText;
  this.cloze = cloze;
  this.partial = partial;

  var textbookBasicCard = new basicCard(front, back);

}

module.exports = ClozeCard;
