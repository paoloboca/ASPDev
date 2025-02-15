export abstract class Parser {

    public static get regex(): RegExp {
        throw new Error(`method not implemented`)
    }

    protected static tranform(matches: RegExpMatchArray): any {
        throw new Error(`method not implemented`)
    }

    public static parse(raw_input: string): any {
        let matches = raw_input.match(this.regex)
        if (matches) {
            return this.tranform(matches)
        }
        throw new Error(`Syntax error: could not parse '${raw_input}' with '${this.regex}'`)
    }

    public stringify(): string {
        throw new Error(`method not implemented`)
    }
}