"use server";

// import { z } from "zod";
// import { zact } from "zact/server";

export async function validatedAction(input: any) {
  return { message: `hello ${input.stuff}` };
}
