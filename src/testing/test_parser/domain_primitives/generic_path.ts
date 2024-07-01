import { checkPathExist } from "../../common/file_handler"

export class GenericPath {
    private static readonly min_size:number = 1
    private static readonly max_size:number = 100
    constructor(
        private content: string) {
        this.content = this.validSize(content)
    }

    private validSize(content:string) : string{
        let raw_content:string = content
        if (raw_content.length >= GenericPath.min_size && raw_content.length <= GenericPath.max_size) {
            return raw_content
        }
        throw new Error(`path must be a string between ${GenericPath.min_size} and ${GenericPath.max_size}`)
    }

    public stringify(): string {
        return `${this.content}`
    }
}