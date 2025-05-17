// Generated from c:/Users/Lenovo V130/Documents/ssl-antlr-calculator/Logic.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,12,61,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,
0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,
6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,4,11,56,8,11,11,11,12,11,57,
1,11,1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,
12,1,0,3,2,0,65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,61,0,1,1,0,0,0,
0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,
0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,
1,0,0,0,3,30,1,0,0,0,5,36,1,0,0,0,7,38,1,0,0,0,9,40,1,0,0,0,11,42,1,0,0,
0,13,44,1,0,0,0,15,46,1,0,0,0,17,48,1,0,0,0,19,50,1,0,0,0,21,52,1,0,0,0,
23,55,1,0,0,0,25,26,5,116,0,0,26,27,5,114,0,0,27,28,5,117,0,0,28,29,5,101,
0,0,29,2,1,0,0,0,30,31,5,102,0,0,31,32,5,97,0,0,32,33,5,108,0,0,33,34,5,
115,0,0,34,35,5,101,0,0,35,4,1,0,0,0,36,37,7,0,0,0,37,6,1,0,0,0,38,39,7,
1,0,0,39,8,1,0,0,0,40,41,5,40,0,0,41,10,1,0,0,0,42,43,5,41,0,0,43,12,1,0,
0,0,44,45,5,8594,0,0,45,14,1,0,0,0,46,47,5,8744,0,0,47,16,1,0,0,0,48,49,
5,8743,0,0,49,18,1,0,0,0,50,51,5,172,0,0,51,20,1,0,0,0,52,53,5,61,0,0,53,
22,1,0,0,0,54,56,7,2,0,0,55,54,1,0,0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,
1,0,0,0,58,59,1,0,0,0,59,60,6,11,0,0,60,24,1,0,0,0,2,0,57,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LogicLexer extends antlr4.Lexer {

    static grammarFileName = "Logic.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'true'", "'false'", null, null, "'('", "')'", 
                         "'\\u2192'", "'\\u2228'", "'\\u2227'", "'\\u00AC'", 
                         "'='" ];
	static symbolicNames = [ null, "TRUE", "FALSE", "LETTER", "DIGIT", "LPAREN", 
                          "RPAREN", "IMPLIES", "OR", "AND", "NOT", "EQUALS", 
                          "WS" ];
	static ruleNames = [ "TRUE", "FALSE", "LETTER", "DIGIT", "LPAREN", "RPAREN", 
                      "IMPLIES", "OR", "AND", "NOT", "EQUALS", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

LogicLexer.EOF = antlr4.Token.EOF;
LogicLexer.TRUE = 1;
LogicLexer.FALSE = 2;
LogicLexer.LETTER = 3;
LogicLexer.DIGIT = 4;
LogicLexer.LPAREN = 5;
LogicLexer.RPAREN = 6;
LogicLexer.IMPLIES = 7;
LogicLexer.OR = 8;
LogicLexer.AND = 9;
LogicLexer.NOT = 10;
LogicLexer.EQUALS = 11;
LogicLexer.WS = 12;



