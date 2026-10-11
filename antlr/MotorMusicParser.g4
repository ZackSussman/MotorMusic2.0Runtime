parser grammar MotorMusicParser;

options {tokenVocab = MotorMusicLexer;}

compilationUnit:
      e = EOF #EmptyProgram
    | e = specification EOF #NonEmptyProgram
;

momentSpecification: 
    time = NUMBER #ROOM
  | time = NUMBER COLON path = NAMED_SYMBOL  #PathPoint
;

specification_list:
    top = specification #SingleSpecificationList
  | top = specification rest = specification_list #MuultiSpecificationList
;

specification:
    throughThisMoment = momentSpecification #Moment
  | LPAREN specifications = specification_list RPAREN #Seq
  | top = specification LCURLY specifications = specification_list RCURLY #Con
;
