import React from "react";
import { Avatar, Stack } from "@mui/material";

export default function DentistListItem({ firstName, lastName, number }) {
  return (
    <div className="m-2">
      <Stack direction="row" spacing={1}>
        <div className="flex justify-center items-center">
          <Avatar sx={{ width: 48, height: 48 }}>{firstName.charAt(0)}</Avatar>
        </div>
        <Stack>
          <p className="text-lg font-bold">{firstName + " " + lastName}</p>
          <p>{number}</p>
        </Stack>
      </Stack>
    </div>
  );
}
