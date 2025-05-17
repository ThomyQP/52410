       grammar Logic;

       prog: line+ EOF;
       line: assignment | formula;
       assignment: variable EQUALS (TRUE | FALSE);
       formula: implication;
       implication: disjunction ('→' implication)?;
       disjunction: conjunction ('∨' conjunction)*;
       conjunction: negation ('∧' negation)*;
       negation: '¬' negation | primary;
       primary: variable
              | TRUE
              | FALSE
              | '(' formula ')';

       variable: LETTER (variable_char)*;
       variable_char: LETTER | DIGIT;

       // LEXEMAS
       TRUE    : 'true';
       FALSE   : 'false';
       LETTER  : [a-zA-Z];
       DIGIT   : [0-9];
       LPAREN  : '(';
       RPAREN  : ')';
       IMPLIES : '→';
       OR      : '∨';
       AND     : '∧';
       NOT     : '¬';
       EQUALS  : '=';
       WS      : [ \t\r\n]+ -> skip;
