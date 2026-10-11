lexer grammar MotorMusicLexer;

channels { WS_CHANNEL }

WS: ('\r\n'+ | '\r'+ | '\n'+ | [ \t]+) -> channel(WS_CHANNEL);

NAMED_SYMBOL : [-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_.^0123456789]+;

NUMBER : [0-9]+[.][0-9]+ | [.][0-9]+ | [0-9]+;

LCURLY : '{';
RCURLY : '}';
LPAREN : '(';
RPAREN : ')';
COLON : ':';

UNRECOGNIZED : .;