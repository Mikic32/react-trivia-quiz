const difficultyToString = (difficulty: number) => {
    switch (difficulty) {
        case 0:
          return "easy";
        case 1:
          return "medium";
        case 2:
          return "hard";
        default:
          return "error";
      }
}

export default difficultyToString