function convertFaceCard(card){
    switch (card){
      case 'K':
        return 10
      case 'J':
        return 10
      case 'Q':
        return 10
      case 'A':
        return 11
    }
  }

  console.log(convertFaceCard())