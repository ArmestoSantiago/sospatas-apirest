import zod from 'zod';

const animalsScheme = zod.object({
  type: zod.enum(['DOG', 'CAT'], {
    invalid_type_error: 'type value must be one of the indicated',
    required_error: 'type is required'
  }),
  condition: zod.enum(['HEALTHY', 'WOUNDED', 'CRITICAL'], {
    invalid_type_error: 'type value must be one of the indicated',
    required_error: 'type is required'
  }),
  description: zod.string(
    {
      required_error: 'description is required'
    }
  ),
  imgSrc: zod.string(
    {
      required_error: 'imgSrc is required'
    }
  ).url(),
  lat: zod.number(),
  lng: zod.number()
});

export const validateAnimal = (animal) => {
  return animalsScheme.safeParse(animal);
};

export const partialValidateAnimal = (animal) => {
  return animalsScheme.partial().safeParse(animal);
};