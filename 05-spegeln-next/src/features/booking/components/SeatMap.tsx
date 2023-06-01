import { SeatInfo } from '@/features/movies/types';
import { Box, Typography } from '@mui/joy';
import { FC } from 'react';

type SeatMapProps = {
  seats: SeatInfo[];
};

const SeatMap: FC<SeatMapProps> = ({ seats }) => {
  const rows: Record<string, SeatInfo[]> = {};

  seats.forEach((seat) => {
    const rowId = seat.seatId.charAt(0);
    if (!rows[rowId]) {
      rows[rowId] = [];
    }

    rows[rowId].push(seat);
  });

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      {Object.entries(rows).map(([rowId, seats]) => {
        return (
          <Box key={rowId} display="flex" flexDirection="row" gap={1}>
            {seats.map((seat) => (
              <Seat key={seat.seatId} seat={seat} />
            ))}
          </Box>
        );
      })}
    </Box>
  );
};

const COLORS: Record<SeatInfo['status'], string> = {
  available: 'green',
  reservedByUser: 'yellow',
  unavailable: 'gray',
} as const;

const Seat: FC<{ seat: SeatInfo }> = ({ seat }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: COLORS[seat.status],
        width: 40,
        height: 40,
      }}
    >
      <Typography>

      {seat.seatId}
      </Typography>
    </Box>
  );
};

export default SeatMap;
