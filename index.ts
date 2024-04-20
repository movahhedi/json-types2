export type JSONPrimitive = string | number | boolean | null;

export type JSONValue = JSONPrimitive | JSONValidObject | JSONValidArray;

export type JSONValidObject = {
	[key: string]: JSONValue;
};

export type JSONValidArray = JSONValue[];

export type JSONValidMap = Map<string, JSONValue>;

export type JSONValidSet = Set<JSONValue>;
