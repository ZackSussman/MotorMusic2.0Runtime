parser grammar MotorMusicParser;

options {tokenVocab = MotorMusicLexer;}

compilationUnit:
      e = EOF #EmptyProgram
    | e = experience EOF #NonEmptyProgram
;

coupling_list:
    top = qualia #ParadoxicallySingleCoupling
  | top = qualia rest = coupling_list #MultiCouplingList
;

qualia: 
    name = NAMED_SYMBOL #NamedQualia
  | QUOTE passed = experience QUOTE #ExperiencedQualia
;

experience:
    LANGLE coupling = coupling_list RANGLE #Coupling 
  | LPAREN successive_experiences = experience_list RPAREN #Successive
  | containing = experience LCURLY contained = experience RCURLY #Containment
  | LSQBRACKET to_be_digested = experience RIGHTARROW gestalt = NAMED_SYMBOL RSQBRACKET #Digest 
  | LSQBRACKET gestalt = NAMED_SYMBOL RIGHTARROW to_spawn = experience RSQBRACKET #Spawn
;

experience_list:
    top = experience #SingleExperienceList
  | top = experience rest = experience_list #MultiExperienceList
;