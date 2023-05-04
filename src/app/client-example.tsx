"use client";

import { validatedAction } from "./action";

export const ZactTestComponent = () => {
  return (
    <div className="flex flex-col text-xl gap-4 text-center">
      <button
        onClick={async () => {
          await validatedAction({ stuff: "test stuff" }).then((response) =>
            alert(response.message)
          );
        }}
      >
        Run server action
      </button>
    </div>
  );
};
