import { useCallback, useEffect, useState } from 'react';

import { extractMonthAndDay } from './../utils/extractMonthAndDay';
import { getDifferenceDate } from './../utils/getDifferenceDate';
import { getDateBeforeDays } from './../utils/getPaymentDay';

export const useExtractDate = (checkInDate: string, checkOutDate: string) => {
  const [formattedCheckInDate, setFormattedCheckInDate] = useState('');
  const [formattedCheckOutDate, setFormattedCheckOutDate] = useState('');
  const [daysDifference, setDaysDifference] = useState(0);
  const [paymentDate, setPaymentDate] = useState('');

  const formatCheckInDate = useCallback(() => {
    const { month, day } = extractMonthAndDay(checkInDate);
    return `${month}월 ${day}일`;
  }, [checkInDate]);

  const formatCheckOutDate = useCallback(() => {
    const { day } = extractMonthAndDay(checkOutDate);
    return `${day}일`;
  }, [checkOutDate]);

  const calculateDaysDifference = useCallback(() => {
    return getDifferenceDate(checkInDate, checkOutDate);
  }, [checkInDate, checkOutDate]);

  const calculatePaymentDate = useCallback(() => {
    return getDateBeforeDays(checkInDate);
  }, [checkInDate]);

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      setFormattedCheckInDate(formatCheckInDate());
      setFormattedCheckOutDate(formatCheckOutDate());
      setDaysDifference(calculateDaysDifference());
      setPaymentDate(calculatePaymentDate());
    }
  }, [checkInDate, checkOutDate, formatCheckInDate, formatCheckOutDate, calculateDaysDifference, calculatePaymentDate]);

  return {
    formattedCheckInDate,
    formattedCheckOutDate,
    daysDifference,
    paymentDate,
  };
};
