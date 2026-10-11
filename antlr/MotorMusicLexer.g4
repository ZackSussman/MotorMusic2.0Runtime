lexer grammar MotorMusicLexer;

channels { WS_CHANNEL }

WS: ('\r\n'+ | '\r'+ | '\n'+ | [ \t]+) -> channel(WS_CHANNEL);

NUMBER : [0-9]+[.][0-9]+ | [.][0-9]+ | [0-9]+;

NAMED_SYMBOL : [-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_.^']+;

LCURLY : '{';
RCURLY : '}';
LPAREN : '(';
RPAREN : ')';
COLON : ':';

UNRECOGNIZED : .;