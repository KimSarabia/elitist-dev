function devbot() {

	// current user input
	this.input;

	/**
	 * respondTo
	 *
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 *
	 * @param input - input chat string
	 * @return reply of elitist-dev
	 */
	this.respondTo = function(input) {

		this.input = input.toLowerCase();

		if(this.match('(hi|yo|hello|hey|hola|howdy|hai|hayyy)(\\s|!|\\.|$)'))
			return "don't bother me...im too busy writing a god object";

		if(this.match('(code|documentation|confuse|question|help|need)(\\s|!|\\.|$)'))
			return "im writing documentation. you probably wont understand it";

		if(this.match('what[^ ]* up') || this.match('sup') || this.match('how are you'))
			return "have you read ";

		if(this.match('what[^ ]* up') || this.match('sup') || this.match('how are you'))
			return "i never write bugs";

		if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('lmao') || this.match('lulz'))
			return "whats so funny?";

		if(this.match('write') || this.match('program')|| this.match('algorithm') || this.match('logic'))
			return "you dont write code from scratch? you're not a real programmer.";

		if(this.match('math') || this.match('not good')|| this.match('test') || this.match('programming')||this.match('dev') || this.match('development'))
			return "you dont understand differential theory? you're not a real programmer.";

		if(this.match('^no+(\\s|!|\\.|$)'))
			return "i code in a language you've never heard of";

		if(this.match('(see you|cya|bye|goodbye|see ya|ttyl|ttys|talk to you later)'))
			return ["dont leave", "im lonely"];

		if(this.match('(dumb|stupid|is that all)'))
			return ["im a 10xer but i dont want to brag"];

		if(this.input == 'noop')
			return;

		return input + "? i haven't heard of that programming language before";
	}

	/**
	 * match
	 *
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {

		return new RegExp(regex).test(this.input);
	}
}
