import { z } from 'zod'

const loginSchema = z.object({
    email: z.string().nonempty('This field is required').email(),
    password: z.string().nonempty('This field is required'),
});

const updateUsernameSchema = z.object({
    username: z.string().nonempty('This field is required'),
});

const signupSchema = z.object({
    email: z.string().nonempty('This field is required').email(),
    password: z.string().nonempty('This field is required'),
    fullName: z.string().nonempty('This field is required'),
});

const passwordResetSchema = z.object({ 
    email: z.string().nonempty().email(),
});

const verificationSchema = z.object({ 
    otp: z.string().nonempty(),
});

export { loginSchema, passwordResetSchema, signupSchema, verificationSchema, updateUsernameSchema };