import { SeatInfo } from '@/features/movies/types';
import { Box, Typography } from '@mui/joy';
import { FC } from 'react';

type SeatMapProps = {
  seats: SeatInfo[];
  onSelectSeat: (seatId: string) => void;
  onDeselectSeat: (seatId: string) => void;
};

const SeatMap: FC<SeatMapProps> = ({ seats, onSelectSeat, onDeselectSeat }) => {
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
              <Seat key={seat.seatId} seat={seat} onClick={() => {
                if (seat.status == 'available') {
                  onSelectSeat(seat.seatId);
                } else if (seat.status == 'reservedByUser') {
                  onDeselectSeat(seat.seatId);
                }
              }
              }/>
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

const Seat: FC<{ seat: SeatInfo, onClick: () => void }> = ({ seat, onClick }) => {
  const interactive =
    seat.status == 'available' || seat.status == 'reservedByUser';
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={() => {
        onClick();
      }}
      sx={{
        backgroundColor: COLORS[seat.status],
        width: 40,
        height: 40,
        cursor: interactive ? 'pointer' : 'auto',
      }}
    >
      <Typography>{seat.seatId}</Typography>
    </Box>
  );
};

export default SeatMap;
