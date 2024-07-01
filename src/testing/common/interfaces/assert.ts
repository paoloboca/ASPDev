import { Atom } from "../../dlv_output_parser/models/atom";
import { Output } from "../../dlv_output_parser/models/output";
import { Rule } from "../../input_parser/models/rule";
import { AspInput } from "../../test_parser/models/asp_input";
import { preConditions } from "../pre_conditions";

export abstract class Assert {

    public abstract fullfilRequirements(rules : Rule[], input: Atom[]): {[id: string] : AspInput}

    public abstract assert(outputs : {[id: string] : Output}): string[]

    public abstract preConditions(): preConditions
}