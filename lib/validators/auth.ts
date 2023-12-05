import { z } from "zod";

export const signUpWithEmailValidator = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const signInWithEmailValidator = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const resetPasswordValidator = z.object({ email: z.string().email() });

export const setNewPasswordValidator = z.object({
  password: z.string().min(6),
});

export type singInWithEmailPayload = z.infer<typeof signInWithEmailValidator>;
export type signUpWithEmailPayload = z.infer<typeof signUpWithEmailValidator>;
export type resetPasswordPayload = z.infer<typeof resetPasswordValidator>;
export type setNewPasswordValidator = z.infer<typeof setNewPasswordValidator>;
