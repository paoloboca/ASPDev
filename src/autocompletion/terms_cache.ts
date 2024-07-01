export class TermsCache {

	/*
	Questa classe fornisce un'interfaccia per gestire un dizionario di termini dinamici
	*/

	dictionary: Map<string, Map<string,string[]>>;
	private static _instance: TermsCache;

	constructor() {
		this.dictionary = new Map<string, Map<string,string[]>>;
	}

	static getInstance(): TermsCache {
		if (!TermsCache._instance) {
			TermsCache._instance = new TermsCache();
		}

		return TermsCache._instance;
	}

	add_field(key: string, values: Map<string,string[]>) {
		this.dictionary.set(key, values);
	}

	get_field(key: string): Map<string,string[]> {
		return this.dictionary.get(key)||new Map<string,string[]>();
	}
}
