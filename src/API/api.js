// api.js

export const fetchData = (date) => {
  const result = [];
  const random = seedRandom(date.getDate());

  for (let i = 17; i <= 22; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
  }

  return result;
};

export const submitAPI = (formData) => {
  return true; // always succeeds for demo purposes
};

// Pseudo-random generator based on date
function seedRandom(seed) {
  let m = 2 ** 35 - 31;
  let a = 185852;
  let s = seed % m;

  return () => (s = (s * a) % m) / m;
}
