import z from 'zod';

export const createUserSchema = z.object({
  id: z.string({ required_error: 'id is required' }),
  photoURL: z.string({ required_error: 'photo url is required' }).url(),
  displayName: z.string({ required_error: 'display name is required' })
});

export const validateCreateUser = (user) => {
  return createUserSchema.safeParse(user);
};