export const colorHexString = (rating: number) => {
  if (rating >= 75) {
    return '#66cc33';
  } else if (rating >= 50) {
    return '#ffcc33';
  } else {
    return '#ff0000';
  }
};
