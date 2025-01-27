//continue

for (let i = 0; i < 5; i++) {
    if (i == 1) {
      continue;
    }
    console.log(i);
  };
//break

  for (let i = 0; i < 5; i++) {
    if (i == 3) {
      break;
    }
    console.log(i);
  };

  // Ejemplo práctico

  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 1) {
      continue;
    } else if (i === 42) {
      console.log(i);
      break;
    } else {
      console.log(i);
    }
  };



