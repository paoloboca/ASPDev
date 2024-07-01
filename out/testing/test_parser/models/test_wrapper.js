"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestWrapper = void 0;
const asp_test_1 = require("./asp_test");
const jtd_1 = __importDefault(require("ajv/dist/jtd"));
const annotation_1 = require("../../common/interfaces/annotation");
const assert_parser_1 = require("./assert_parser");
const atom_1 = require("../../dlv_output_parser/models/atom");
const test_name_1 = require("../domain_primitives/test_name");
const label_1 = require("../../input_parser/domain_primitives/label");
const generic_path_1 = require("../domain_primitives/generic_path");
const vscode = __importStar(require("vscode"));
class TestWrapper extends annotation_1.Annotation {
    tests;
    constructor(tests) {
        super();
        this.tests = tests;
    }
    static get regex() {
        return /%\*\*\s*@(test|fixture)\s*(?:\((\w+)\)){0,1}\{[^*%]+\}\s*\*\*%/mg;
    }
    static tranform(matches) {
        let fixtures = new Map();
        let raw_tests = [];
        let tests = [];
        matches.map(result => {
            let groups = result.match(/%\*\*\s*@(test|fixture)\s*(?:\((\w+)\)){0,1}\{[^*%]+\}\s*\*\*%/m);
            let annotation = groups ? groups[1] : null;
            let fixtureName = groups ? groups[2] : null;
            result = result.replace(/%\*\*\s*@(?:test|fixture)\s*(?:\((\w+)\)){0,1}/mg, "").replace(/\s*\*\*%/mg, "");
            let raw_annotation = TestWrapper.json_parse((result));
            raw_annotation = TestWrapper.initializeVariables(raw_annotation);
            let operation = annotation === 'test' ? raw_tests.push(raw_annotation) : (fixtureName ? fixtures.set(fixtureName, raw_annotation) : undefined);
            if (operation === undefined) {
                throw new Error(`you must give a name to the fixture`);
            }
        });
        raw_tests.forEach(raw_test => {
            let fixtures_used_by_test = raw_test.fixtures ?? [];
            fixtures_used_by_test.forEach(fixtureName => {
                let fixture = fixtures.get(fixtureName);
                raw_test = fixture ? TestWrapper.injectFixture(fixture, raw_test) : raw_test;
            });
            let valid_test = TestWrapper.validate_test(raw_test);
            tests.push(valid_test);
        });
        return new TestWrapper(tests);
    }
    static initializeVariables(raw_annotation) {
        let annotation = raw_annotation;
        annotation.name = raw_annotation.name ?? "";
        annotation.scope = raw_annotation.scope ?? [];
        annotation.input = raw_annotation.input ?? "";
        annotation.assert = raw_annotation.assert ?? [];
        annotation.file = raw_annotation.file ?? "";
        annotation.fixtures = raw_annotation.fixtures ?? [];
        return annotation;
    }
    static injectFixture(fixture, target) {
        let injectedTest = target;
        for (let property in injectedTest) {
            if (property !== 'fixtures') {
                Array.isArray(injectedTest[property]) ? injectedTest[property].push(...fixture[property]) : injectedTest[property] += fixture[property];
            }
        }
        return injectedTest;
    }
    static validate_test(test_to_be_validated) {
        for (let property in test_to_be_validated) {
            if (property == 'file') {
                continue;
            }
            else {
                let field_is_valid = test_to_be_validated[property].length > 0 || property === 'fixtures';
                if (!field_is_valid) {
                    throw new Error(`missing required property '${property}'`);
                }
            }
        }
        let raw_testName = test_to_be_validated.name ?? "";
        let raw_testScope = test_to_be_validated.scope ?? [];
        let testScope = [];
        raw_testScope.forEach(raw_label => {
            testScope.push(new label_1.Label(raw_label));
        });
        let parserd_input = test_to_be_validated.input ? (test_to_be_validated.input.length > 0 ? (test_to_be_validated.input.split(' ').map((atom_raw) => atom_1.Atom.parse(atom_raw)) ?? []) : []) : [];
        let parsed_assert = test_to_be_validated.assert ? (test_to_be_validated.assert.length > 0 ? assert_parser_1.AssertParser.parse(test_to_be_validated.assert.toString()) : []) : [];
        let testFile = "";
        if (test_to_be_validated.file != '') {
            testFile = test_to_be_validated.file ?? "";
        }
        else {
            if (vscode.window.activeTextEditor) {
                testFile = vscode.window.activeTextEditor.document.fileName;
            }
        }
        return new asp_test_1.AspTest(new test_name_1.TestName(raw_testName), testScope, parserd_input, parsed_assert, new generic_path_1.GenericPath(testFile));
    }
    static json_parse(json) {
        const ajv = new jtd_1.default();
        const schema = {
            optionalProperties: {
                name: { type: "string" },
                scope: { elements: { type: "string" } },
                input: { type: "string" },
                assert: { elements: { type: "string" } },
                file: { type: "string" },
                fixtures: { elements: { type: "string" } },
            }
        };
        const parse = ajv.compileParser(schema);
        const data = parse(json);
        if (data === undefined) {
            throw new Error(parse.message + `\nerror position in string: ` + parse.position);
        }
        else {
            return data;
        }
    }
}
exports.TestWrapper = TestWrapper;
//# sourceMappingURL=test_wrapper.js.map