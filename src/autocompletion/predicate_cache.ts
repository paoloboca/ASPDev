import { AutoCompletion } from "./autocompletion_interface";

/*
Questa classe fornisce un'interfaccia per gestire un dizionario di predicati dinamici, 
dove ogni predicato è associato a un elenco di valori per il completamento automatico. 
*/

export class PredicateCache {

	dictionary: Map<string, AutoCompletion[]>;
	private static _instance: PredicateCache;

	constructor() {
		this.dictionary = new Map<string, any>();
	}

	static getInstance(): PredicateCache {
		if (!PredicateCache._instance) {
			PredicateCache._instance = new PredicateCache();
		}

		return PredicateCache._instance;
	}

	add_field(key: string, values: AutoCompletion[]) {
		const uniqueArray = values.filter((value: AutoCompletion, index: number, array: AutoCompletion[]) => index === array.findIndex(
			(t: AutoCompletion) =>
			(
				t.label === value.label
			)
		)
		);
		this.dictionary.set(key, uniqueArray);
	}

	get_field(key: string): AutoCompletion[] {
		return this.dictionary.get(key)||[];
	}

}
