// DateStore.ts
// import { makeAutoObservable } from 'mobx';

// class DateStore {
//   selectedDate: Date | null = null;

//   constructor() {
//     makeAutoObservable(this);
//   }

//   setSelectedDate(date: Date | null) {
//     this.selectedDate = date;
//   }
// }

// export default DateStore;



// // DateStore.ts
// import { SetStateAction, useState } from 'react';

// const useDateStore = () => {
//   const [selectedDate, setSelectedDate] = useState<Date>(new Date);

//   const setSelectedDateInternal = (date: SetStateAction<Date>) => {
//     setSelectedDate(date);
//   };

//   return {
//     selectedDate,
//     setSelectedDate: setSelectedDateInternal, 
//   };
// };

// export default useDateStore;

// DateStore.ts
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
