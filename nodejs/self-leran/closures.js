const first = () => {
  const greet = 'Hi';
  const second = () => {
    const name = 'shivam';
    console.log(greet);
  }
  return second();
}
first();