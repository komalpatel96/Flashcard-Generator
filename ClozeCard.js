function ClozeCard (text, cloze){
	// this.text = text.split(cloze);
	this.partial = function() {
			if (this.fullText.includes(this.cloze)) {
				return this.fullText.replace(this.cloze, '...');
			} else {
				// Broken cloze message returned when text doesn't containt cloze.
				var brokenClozeMessage = "Oops! The full text: '" + this.fullText + "' doesn't contain the cloze: '" + this.cloze + "'.";
				return brokenClozeMessage;
			}
		};
	// this.partial = text.replace(cloze, '...');
	this.cloze = cloze;
	// if(this.partial === text) throw new Error('This doesn\'t work, oops');
    // this.cloze = cloze;


}

module.exports = ClozeCard;