grammar TEST;

WS  :   [ \t\r\n]+ -> skip ; 
STRINGS:  '"' ('\\"' | .)*?'"' ;
NUMBER: [0-9]+;
DOT: '.';
DDOT: '..';
COMMA: ',';
HEAD_SEPARATOR: '|';
SEMICOLON: ';';
COLON: ':';
AT: '@';
CONS: ':-';
WCONS: ':~';
PLUS: '+';
DASH: '-';
TIMES: '*';
SLASH: '/';
BACK_SLASH: '\\';
PARAM_OPEN: '(';
PARAM_CLOSE: ')';
SQUARE_OPEN: '[';
SQUARE_CLOSED: ']';
CURLY_OPEN: '{';
CURLY_CLOSE: '}';
QUERY_MARK: '?';
ANON_VAR: '_';
EQUAL: '=' | '==';
UNEQUAL: '<>' | '!=';
LESS: '<';
GREATER: '>';
LESS_OR_EQ: '<=';
GREATER_OR_EQ: '>=';
AMPERSAND: '&';
EXISTS: '\\E';


START_TEST: '%**';
END_TEST: '**%';
NAME:'name';
NAME_1:'"name"' ;
RULE_AFTER_AT : 'rule'; 
LABEL:'labels';
RULES: 'rules'; 
BLOCK : 'block'; 
TEST : 'test'; 
CONSTRAINT: 'constraint'; 
SCOPE : 'scope'; 
PROGRAM_FILES: 'file'; 
INPUT : 'input'; 
INPUT_FILES : 'inputFiles'; 
ASSERT : '"assert"'; 
ATOMS : 'atoms'; 
COST : 'cost'; 
LEVEL : 'level'; 
PROGRAM : 'program'; 
ADD_FILES: 'additionalFiles'; 
NUM_STR : 'number';



ASSERT_NAS : 'noAnswerSet'; 
ASSERT_TIA : 'trueInAll'; 
ASSERT_TIAL : 'trueInAtLeast'; 
ASSERT_TIAM : 'trueInAtMost'; 
ASSERT_TIE : 'trueInExactly'; 
ASSERT_FIA : 'falseInAll'; 
ASSERT_FIAL : 'falseInAtLeast'; 
ASSERT_FIAM : 'falseInAtMost'; 
ASSERT_FIE : 'falseInExactly'; 
ASSERT_C : 'constraintForAll'; 
ASSERT_CIE : 'constraintInExactly'; 
ASSERT_CIAL : 'constraintInAtLeast'; 
ASSERT_CIAM : 'constraintInAtMost';
ASSERT_BMC : 'bestModelCost'; 



annotationList: annotationExpression (annotationList)? EOF ;

annotationExpression: ruleDefinition | blockDefinition | testDefinition | programDefinition | nameDefinition;

nameDefinition: START_TEST STRINGS END_TEST;

ruleDefinition:  START_TEST AT RULE_AFTER_AT PARAM_OPEN NAME EQUAL STRINGS COMMA BLOCK EQUAL STRINGS PARAM_CLOSE END_TEST;

blockDefinition: START_TEST AT BLOCK PARAM_OPEN NAME EQUAL STRINGS (COMMA RULES EQUAL CURLY_OPEN ruleReferenceList CURLY_CLOSE)? PARAM_CLOSE END_TEST;

testDefinition: START_TEST AT TEST CURLY_OPEN STRINGS COLON STRINGS COMMA STRINGS COLON SQUARE_OPEN referenceList SQUARE_CLOSED COMMA STRINGS COLON STRINGS COMMA  STRINGS COLON SQUARE_OPEN assertList SQUARE_CLOSED (COMMA STRINGS COLON STRINGS)? CURLY_CLOSE END_TEST;

programDefinition: AT PROGRAM PARAM_OPEN NAME EQUAL STRINGS (COMMA ADD_FILES EQUAL STRINGS)? PARAM_CLOSE;

ruleReferenceList: ruleReference (COMMA ruleReferenceList)?;

ruleReference: STRINGS;

programFilesList: programFile (COMMA programFilesList)?;

programFile: STRINGS;

inputFilesList: inputFile (COMMA inputFilesList)?;

inputFile: STRINGS;

referenceList: reference (COMMA referenceList)?;

reference: STRINGS;

assertList: STRINGS (COMMA assertList)?;














