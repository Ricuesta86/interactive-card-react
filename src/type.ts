export type cardType = {
    number: typeString;
    name: typeString;
    yy: typeNumber;
    mm: typeNumber;
    cvc: typeNumber;
  };

  export type typeString = {
    value:string,
    error:string
  }

  export type typeNumber = {
    value:number,
    error:string
  }