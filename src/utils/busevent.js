"use client";
let customEventColecction = [];

const BusEvents = {
  on(event, callback) {
    let target = customEventColecction.find((e) => e === event);
    document.addEventListener(event, callback, true);
  },
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event, callback) {
    document.removeEventListener(event, callback, true);
  },
};

export default BusEvents;
