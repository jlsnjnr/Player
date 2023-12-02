import { Box } from "@gluestack-ui/themed";
import { ReactNode } from "react";

interface IconMusicProps {
  bg: string;
  top?: number;
  left?: number;
  right?: number;
  rotate: string;
  children: ReactNode;
}

export function IconMusic({
  bg,
  top,
  left,
  right,
  rotate,
  children,
}: IconMusicProps) {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      w={46}
      h={46}
      bg={bg}
      position="absolute"
      top={top}
      left={left}
      right={right}
      rounded={10}
      style={{ transform: `rotate(${rotate})` }}
    >
      {children}
    </Box>
  );
}
