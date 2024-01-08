import { makeAutoObservable } from 'mobx';

class DateStore {
  selectedDate: Date | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedDate(date: Date | null) {
    this.selectedDate = date;
  }
}

export default DateStore;
