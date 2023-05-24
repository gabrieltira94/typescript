interface Hardware {
  ram: number;
  ssd: number;
  licence: string;
  processor: string;
}

type LaptopBrands = "macbook" | "asus" | "dell";

let asus: Hardware = {
  licence: '421-0vsa-bvsa-213412-afsad',
  ram: 12,
  ssd: 256,
  processor: 'ryzen 7 5600x'
};


/**
 * Partial<Type>
 * Constructs a type with all properties of `Type` set to optional.
 */
function updateHardware(unit: Hardware, newComponents: Partial<Hardware>) {
  return {
    ...unit,
    ...newComponents
  };
}

asus = updateHardware(asus, { licence: '213412-fsdafg-test-0112', ram: 16 });

console.log('Partial<Hardware>: ', { asus });


/**
 * Readonly<Type>
 * Constructs a type with all properties of `Type` set to `readonly`
 */
const macbook: Readonly<Hardware> = {
  licence: 'ultra-secret-mac-thing',
  processor: 'm2 pro max',
  ram: 32,
  ssd: 1024
};

// @ts-ignore
macbook.licence = ''; // this throws error as we are not allowed to modify any property of `macbook`


/**
 * Record<Keys, Type>
 * Constructs an object type whose property keys are `Keys` and whose property values are `Type`
 */
const laptops: Record<LaptopBrands, Hardware> = {
  asus: {
    licence: 'tesgs-gfsda-gsadb',
    ram: 22,
    ssd: 851,
    processor: 'ryzen 3 5600'
  },
  dell: {
    licence: 'knlksda-gdsab-gfqweop',
    ram: 32,
    ssd: 560,
    processor: 'intel i7 11300'
  },
  macbook: {
    licence: 'poiwqe-1238fgds-poiqweb',
    ram: 32,
    ssd: 1024,
    processor: 'm2 pro'
  }
};

console.log('Record<LaptopBrands, Hardware>: ', laptops.dell);


/**
 * Pick<Type, Keys>
 * Constructs a type by picking the set of properties `Keys` (string literal or union of string literals) from `Type`
*/
type ComponentsOnly = Pick<Hardware, 'processor' | 'ram' | 'ssd'>;

const lenovo: ComponentsOnly = {
  processor: 'intel i9 11th',
  ram: 32,
  ssd: 1024
};

console.log('Pick<Hardware, "processor" | "ram" | "ssd">: ', lenovo);


/**
 * Omit<Type, Keys>
 * Constructs a type by picking all properties from `Type` and then removing `Keys` (string literal or union of string literals)
*/
type SimplerComponentsOnly = Omit<Hardware, 'licence'>;

const anotherLenovo: SimplerComponentsOnly = {
  processor: 'intel i7 10th',
  ram: 16,
  ssd: 512
};

console.log('Omit<Hardware, "licence">: ', anotherLenovo);