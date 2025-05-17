// Generated from c:/Users/Lenovo V130/Documents/ssl-antlr-calculator/Logic.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LogicListener from './LogicListener.js';
import LogicVisitor from './LogicVisitor.js';

const serializedATN = [4,1,12,84,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,4,0,24,8,0,11,0,12,
0,25,1,0,1,0,1,1,1,1,3,1,32,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,3,4,
43,8,4,1,5,1,5,1,5,5,5,48,8,5,10,5,12,5,51,9,5,1,6,1,6,1,6,5,6,56,8,6,10,
6,12,6,59,9,6,1,7,1,7,1,7,3,7,64,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,73,
8,8,1,9,1,9,5,9,77,8,9,10,9,12,9,80,9,9,1,10,1,10,1,10,0,0,11,0,2,4,6,8,
10,12,14,16,18,20,0,2,1,0,1,2,1,0,3,4,82,0,23,1,0,0,0,2,31,1,0,0,0,4,33,
1,0,0,0,6,37,1,0,0,0,8,39,1,0,0,0,10,44,1,0,0,0,12,52,1,0,0,0,14,63,1,0,
0,0,16,72,1,0,0,0,18,74,1,0,0,0,20,81,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,
0,24,25,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,27,1,0,0,0,27,28,5,0,0,1,
28,1,1,0,0,0,29,32,3,4,2,0,30,32,3,6,3,0,31,29,1,0,0,0,31,30,1,0,0,0,32,
3,1,0,0,0,33,34,3,18,9,0,34,35,5,11,0,0,35,36,7,0,0,0,36,5,1,0,0,0,37,38,
3,8,4,0,38,7,1,0,0,0,39,42,3,10,5,0,40,41,5,7,0,0,41,43,3,8,4,0,42,40,1,
0,0,0,42,43,1,0,0,0,43,9,1,0,0,0,44,49,3,12,6,0,45,46,5,8,0,0,46,48,3,12,
6,0,47,45,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,11,1,0,0,
0,51,49,1,0,0,0,52,57,3,14,7,0,53,54,5,9,0,0,54,56,3,14,7,0,55,53,1,0,0,
0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,13,1,0,0,0,59,57,1,0,0,0,
60,61,5,10,0,0,61,64,3,14,7,0,62,64,3,16,8,0,63,60,1,0,0,0,63,62,1,0,0,0,
64,15,1,0,0,0,65,73,3,18,9,0,66,73,5,1,0,0,67,73,5,2,0,0,68,69,5,5,0,0,69,
70,3,6,3,0,70,71,5,6,0,0,71,73,1,0,0,0,72,65,1,0,0,0,72,66,1,0,0,0,72,67,
1,0,0,0,72,68,1,0,0,0,73,17,1,0,0,0,74,78,5,3,0,0,75,77,3,20,10,0,76,75,
1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,19,1,0,0,0,80,78,1,
0,0,0,81,82,7,1,0,0,82,21,1,0,0,0,8,25,31,42,49,57,63,72,78];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LogicParser extends antlr4.Parser {

    static grammarFileName = "Logic.g4";
    static literalNames = [ null, "'true'", "'false'", null, null, "'('", 
                            "')'", "'\\u2192'", "'\\u2228'", "'\\u2227'", 
                            "'\\u00AC'", "'='" ];
    static symbolicNames = [ null, "TRUE", "FALSE", "LETTER", "DIGIT", "LPAREN", 
                             "RPAREN", "IMPLIES", "OR", "AND", "NOT", "EQUALS", 
                             "WS" ];
    static ruleNames = [ "prog", "line", "assignment", "formula", "implication", 
                         "disjunction", "conjunction", "negation", "primary", 
                         "variable", "variable_char" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LogicParser.ruleNames;
        this.literalNames = LogicParser.literalNames;
        this.symbolicNames = LogicParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LogicParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 22;
	            this.line();
	            this.state = 25; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1070) !== 0));
	        this.state = 27;
	        this.match(LogicParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LogicParser.RULE_line);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this.assignment();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 30;
	            this.formula();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LogicParser.RULE_assignment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.variable();
	        this.state = 34;
	        this.match(LogicParser.EQUALS);
	        this.state = 35;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formula() {
	    let localctx = new FormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LogicParser.RULE_formula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.implication();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	implication() {
	    let localctx = new ImplicationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LogicParser.RULE_implication);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.disjunction();
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 40;
	            this.match(LogicParser.IMPLIES);
	            this.state = 41;
	            this.implication();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	disjunction() {
	    let localctx = new DisjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LogicParser.RULE_disjunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.conjunction();
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 45;
	            this.match(LogicParser.OR);
	            this.state = 46;
	            this.conjunction();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conjunction() {
	    let localctx = new ConjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LogicParser.RULE_conjunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.negation();
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 53;
	            this.match(LogicParser.AND);
	            this.state = 54;
	            this.negation();
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	negation() {
	    let localctx = new NegationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LogicParser.RULE_negation);
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.match(LogicParser.NOT);
	            this.state = 61;
	            this.negation();
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 62;
	            this.primary();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LogicParser.RULE_primary);
	    try {
	        this.state = 72;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.variable();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.match(LogicParser.TRUE);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 67;
	            this.match(LogicParser.FALSE);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 68;
	            this.match(LogicParser.LPAREN);
	            this.state = 69;
	            this.formula();
	            this.state = 70;
	            this.match(LogicParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LogicParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(LogicParser.LETTER);
	        this.state = 78;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 75;
	                this.variable_char(); 
	            }
	            this.state = 80;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable_char() {
	    let localctx = new Variable_charContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LogicParser.RULE_variable_char);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LogicParser.EOF = antlr4.Token.EOF;
LogicParser.TRUE = 1;
LogicParser.FALSE = 2;
LogicParser.LETTER = 3;
LogicParser.DIGIT = 4;
LogicParser.LPAREN = 5;
LogicParser.RPAREN = 6;
LogicParser.IMPLIES = 7;
LogicParser.OR = 8;
LogicParser.AND = 9;
LogicParser.NOT = 10;
LogicParser.EQUALS = 11;
LogicParser.WS = 12;

LogicParser.RULE_prog = 0;
LogicParser.RULE_line = 1;
LogicParser.RULE_assignment = 2;
LogicParser.RULE_formula = 3;
LogicParser.RULE_implication = 4;
LogicParser.RULE_disjunction = 5;
LogicParser.RULE_conjunction = 6;
LogicParser.RULE_negation = 7;
LogicParser.RULE_primary = 8;
LogicParser.RULE_variable = 9;
LogicParser.RULE_variable_char = 10;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(LogicParser.EOF, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicParser.RULE_line;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.exitLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicVisitor ) {
	        return visitor.visitLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicParser.RULE_assignment;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	EQUALS() {
	    return this.getToken(LogicParser.EQUALS, 0);
	};

	TRUE() {
	    return this.getToken(LogicParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(LogicParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicParser.RULE_formula;
    }

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.enterFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.exitFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicVisitor ) {
	        return visitor.visitFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImplicationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicParser.RULE_implication;
    }

	disjunction() {
	    return this.getTypedRuleContext(DisjunctionContext,0);
	};

	IMPLIES() {
	    return this.getToken(LogicParser.IMPLIES, 0);
	};

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.enterImplication(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.exitImplication(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicVisitor ) {
	        return visitor.visitImplication(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DisjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicParser.RULE_disjunction;
    }

	conjunction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConjunctionContext);
	    } else {
	        return this.getTypedRuleContext(ConjunctionContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicParser.OR);
	    } else {
	        return this.getToken(LogicParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.enterDisjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.exitDisjunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicVisitor ) {
	        return visitor.visitDisjunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicParser.RULE_conjunction;
    }

	negation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NegationContext);
	    } else {
	        return this.getTypedRuleContext(NegationContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicParser.AND);
	    } else {
	        return this.getToken(LogicParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.enterConjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.exitConjunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicVisitor ) {
	        return visitor.visitConjunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NegationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicParser.RULE_negation;
    }

	NOT() {
	    return this.getToken(LogicParser.NOT, 0);
	};

	negation() {
	    return this.getTypedRuleContext(NegationContext,0);
	};

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.enterNegation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.exitNegation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicVisitor ) {
	        return visitor.visitNegation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicParser.RULE_primary;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	TRUE() {
	    return this.getToken(LogicParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(LogicParser.FALSE, 0);
	};

	LPAREN() {
	    return this.getToken(LogicParser.LPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	RPAREN() {
	    return this.getToken(LogicParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.exitPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicVisitor ) {
	        return visitor.visitPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicParser.RULE_variable;
    }

	LETTER() {
	    return this.getToken(LogicParser.LETTER, 0);
	};

	variable_char = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Variable_charContext);
	    } else {
	        return this.getTypedRuleContext(Variable_charContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Variable_charContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicParser.RULE_variable_char;
    }

	LETTER() {
	    return this.getToken(LogicParser.LETTER, 0);
	};

	DIGIT() {
	    return this.getToken(LogicParser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.enterVariable_char(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicListener ) {
	        listener.exitVariable_char(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicVisitor ) {
	        return visitor.visitVariable_char(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LogicParser.ProgContext = ProgContext; 
LogicParser.LineContext = LineContext; 
LogicParser.AssignmentContext = AssignmentContext; 
LogicParser.FormulaContext = FormulaContext; 
LogicParser.ImplicationContext = ImplicationContext; 
LogicParser.DisjunctionContext = DisjunctionContext; 
LogicParser.ConjunctionContext = ConjunctionContext; 
LogicParser.NegationContext = NegationContext; 
LogicParser.PrimaryContext = PrimaryContext; 
LogicParser.VariableContext = VariableContext; 
LogicParser.Variable_charContext = Variable_charContext; 
