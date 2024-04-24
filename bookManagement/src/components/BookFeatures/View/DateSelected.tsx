import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Box} from "@mui/material";
import dayjs from "dayjs";

const DateSelected = ({value, setValue}) => {
    return (
        <Box sx={{mt:2}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Book PublishedDate"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                maxDate={dayjs(new Date())}
            />
        </LocalizationProvider>
        </Box>
    );
}
export default DateSelected