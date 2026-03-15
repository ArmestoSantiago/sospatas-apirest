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
  description: zod.string({ required_error: 'description is required', invalid_type_error: 'description value must be a string' }),
  imgSrc: zod.string({ required_error: 'imgSrc is required' }
  ).url(),
  lat: zod.number({ required_error: 'lat es required', invalid_type_error: 'lat value must be a number' }),
  lng: zod.number({ required_error: 'lng es required', invalid_type_error: 'lng value must be a number' }),
  address: zod.string({ required_error: 'address es required', invalid_type_error: 'address value must be a string' }),
  animal_name: zod.string({ required_error: 'name is required', invalid_type_error: 'address value must be a string' }),
  situation: zod.enum(['ADOPTION', 'RESCUE', 'LOST', 'TRANSITION'], { invalid_type_error: 'situation value must be one of the indicated', required_error: 'situation is required' })
});

export const validateAnimal = (animal) => {
  return animalsScheme.safeParse(animal);
};

export const partialValidateAnimal = (animal) => {
  return animalsScheme.partial().safeParse(animal);
};