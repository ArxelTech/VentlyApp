import { z } from 'zod'

const loginSchema = z.object({
    email: z.string().nonempty('This field is required').email(),
    password: z.string().nonempty('This field is required'),
});

export { loginSchema };