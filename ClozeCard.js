function ClozeCard(fullText, cloze){
	this.fullText = fullText;
	this.cloze = cloze;
	this.partial = function() {
			if (this.fullText.includes(this.cloze)) {
				return this.fullText.replace(this.cloze, '...');
		}
	}
}
module.exports = ClozeCard;

