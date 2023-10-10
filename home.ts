type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

interface Example {
  prop1: number;
  prop2: {
    prop3: string;
    prop4: {
      prop5: boolean;
    };
  };
}

const readOnlyExample: DeepReadonly<Example> = {
  prop1: 42,
  prop2: {
    prop3: "readonly",
    prop4: {
      prop5: true,
    },
  },
};




type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};

interface UserData {
  id?: number;
  name?: string;
  address?: {
    street?: string;
    city?: string;
  };
}

const readOnlyUserData: DeepRequireReadonly<UserData> = {
  id: 1,
  name: "Yaroslav",
  address: {
    street: "123 Main St",
    city: "Kharkov",
  },
};




type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

const originalObj = {
  name: "Yaroslav",
  age: 20,
};

type UppercaseKeysObj = UpperCaseKeys<typeof originalObj>;




type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: {
    value: T[K];
  };
};

interface Car {
  brand: string;
  model: string;
  year: number;
}

const carObject: Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
};

const carPropertyDescriptors: ObjectToPropertyDescriptor<Car> = {
  brand: { value: "Toyota" },
  model: { value: "Camry" },
  year: { value: 2022 },
};






  